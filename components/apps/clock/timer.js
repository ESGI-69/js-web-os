import {
  findSetting,
  getSettingValue,
} from '../../../helpers/settingsHelper';

class TabTimer extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
    this.isPlay = false;
    this.hourCounter = 0;
    this.minuteCounter = 0;
    this.secondCounter = 0;
    this.interval;

    this.playButton;
    this.resetButton;
    this.hourInput;
    this.minuteInput;
    this.secondInput;
  }

  connectedCallback() {
    this.render();

    this.playButton = this.shadow.querySelector('.play');
    this.resetButton = this.shadow.querySelector('.reset');

    this.hourInput = this.shadow.querySelector('.hour-input');
    this.minuteInput = this.shadow.querySelector('.minute-input');
    this.secondInput = this.shadow.querySelector('.second-input');

    if (this.isPlay) {
      this.playButton.innerHTML = 'Pause';
    } else {
      this.hourInput.value = this.hourCounter;
      this.minuteInput.value = this.minuteCounter;
      this.secondInput.value = this.secondCounter;
    }

    this.playButton.addEventListener('click', this.play.bind(this));
    this.resetButton.addEventListener('click', this.reset.bind(this));

    this.hourInput.addEventListener('input', this.setTimer.bind(this));
    this.minuteInput.addEventListener('input', this.setTimer.bind(this));
    this.secondInput.addEventListener('input', this.setTimer.bind(this));
  }

  disconnectedCallback() {
    this.playButton.removeEventListener('click', this.play.bind(this));
    this.resetButton.removeEventListener('click', this.reset.bind(this));
    this.stopInterval();
  }

  startInterval() {
    this.interval = setInterval(() => {
      if (this.secondCounter > 0) {
        this.secondCounter--;
      }
      else if (this.minuteCounter > 0 && this.secondCounter === 0) {
        this.minuteCounter--;
        this.secondCounter = 59;
      }
      else if (this.hourCounter > 0 && this.minuteCounter === 0 && this.secondCounter === 0) {
        this.hourCounter--;
        this.minuteCounter = 59;
      }
      if (this.secondCounter === 0 && this.minuteCounter === 0 && this.hourCounter === 0) {
        this.stopInterval();
        this.playButton.innerHTML = 'Start';
        this.isPlay = false;
        this.vibrate();

        new Notification("Timer ended !!!");

        setTimeout(() => {
          this.reset();
        }, 1000);
      }
      this.renderDate(this.hourCounter, this.minuteCounter, this.secondCounter);
    }, 1000);
  }

  stopInterval() {
    clearInterval(this.interval);
  }
  
  vibrate() {
    if (navigator.vibrate) {
      const vibrationDuration = getSettingValue(findSetting('os-vibration-duration'));  
      if (getSettingValue(findSetting('os-vibration'))) {
        console.log('vibrating');
        navigator.vibrate(vibrationDuration);
      }
    } else {
      console.log('vibration not supported');
    }
  }
  
  play() {
    this.vibrate();
    if (!this.isPlay) {
      this.playButton.innerHTML = 'Pause';
      this.startInterval();
      this.isPlay = true;
    } else {
      this.playButton.innerHTML = 'Start';
      this.stopInterval();
      this.isPlay = false;
    }
  }

  reset() {
    this.vibrate();
    this.stopInterval();
    this.isPlay = false;
    this.playButton.innerHTML = 'Start';
    this.setTimer();
  }

  setTimer() {
    this.vibrate();

    const hour = this.hourInput.value;
    const minute = this.minuteInput.value;
    const second = this.secondInput.value;

    if (hour !== 0 && minute !== 0 && second !== 0) {
      this.playButton.disabled = false;
    } else {
      this.playButton.disabled = true;
    }

    this.hourCounter = parseInt(hour);
    this.minuteCounter = parseInt(minute);
    this.secondCounter = parseInt(second);

    this.renderDate(hour, minute, second);
  } 

  renderDate(hour, minute, second) {
    this.shadow.querySelector('.date').innerHTML = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}:${second.toString().padStart(2, '0')}`;
  }

  render() {
    this.shadow.innerHTML = `
      <style>
        :host {
          display: grid !important;
          justify-content: center;
          grid-template-columns: 1fr;
          grid-template-rows: repeat(4, auto);
          gap: 1rem;
          background: var(--color-background);
          width: 100%;
          height: 100%;
          box-sizing: border-box;
          padding: 1rem;
          justify-items: center;
        }
        :host .title {
          width: 100%;
          margin: 0;
          color: var(--color-text);
        }
        :host .clock {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 300px;
          width: 300px;
          background: #ececec;
          border-radius: 50%;
          border: 14px solid #333;
          box-shadow: 0 2vw 4vw -1vw rgb(0 0 0 / 80%);
        }
        :host .clock .date {
          font-size: 3rem;
          font-weight: 700;
        }
        :host .btn-wrapper {
          display: flex;
          justify-content: space-between;
          gap: 3rem;
          width: 100%;
        }
        :host .btn-wrapper button {
          width: 100%;
          height: 50px;
          border: 1px solid var(--color-background-light);
          border-radius: 5px;
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--color-text);
          background: var(--color-background)
          cursor: pointer;
          transition: all 0.2s ease-in-out;
        }
        :host .btn-wrapper button:hover {
          background: var(--color-background-light);
        }
        :host .btn-wrapper button:disabled {
          background: var(--color-background-light);
          color: var(--color-text);
          cursor: not-allowed;
        }
        :host .timer-inputs {
          display: flex;
          gap: 3rem;
          justify-content: space-between;
          width: 100%;
        }

        :host .timer-inputs span {
          font-size: 1.2rem;
          color: var(--color-text);
          flex-grow: 1;
          text-align: center;
        }
        :host .timer-inputs input {
          width: 100%;
          border: none;
          padding: 1rem;
          border-radius: 5px;
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--color-background);
          background: var(--color-text);
          text-align: center;
          box-shadow: 0 2vw 4vw -1vw rgb(0 0 0 / 80%);
          flex-grow: 1;
        }

        :host .settings {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
      </style>
      <h1 class="title">Timer</h1>
      <div class="clock">
        <span class="date">00:00:00</span>
      </div>

      <div class="settings">
        <div class="btn-wrapper">
          <button class="play" disabled>Start</button>
          <button class="reset">Reset</button>
        </div>

        <div class="timer-inputs">
          <span>Hours</span>
          <span>Minutes</span>
          <span>Seconds</span>
        </div>

        <div class="timer-inputs">
          <input type="number" name="hour" id="hour" placeholder="Hour" class="hour-input">
          <input type="number" name="minute" id="minute" placeholder="Minute" class="minute-input" max="59">
          <input type="number" name="second" id="second" placeholder="Second" class="second-input" max="59">
        </div>
      </div>
    `;
  };
}

customElements.define('os-tab-timer', TabTimer);
