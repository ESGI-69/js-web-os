import {
  findSetting,
  getSettingValue,
} from '../../../helpers/settingsHelper';

class TabStopwatch extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });

    this.isPlay = false
    this.minCounter = 0
    this.min;
    this.secCounter = 0
    this.sec;
    this.centiCounter = 0
    this.centiSec;
    this.lapId = 0
  }

  connectedCallback() {
    this.render();
    
    this.playBtn = this.shadow.querySelector(".play");
    this.lapBtn = this.shadow.querySelector(".lap");
    this.resetBtn = this.shadow.querySelector(".reset");
    this.minute = this.shadow.querySelector(".min");
    this.second = this.shadow.querySelector(".sec");
    this.centiSecond = this.shadow.querySelector(".msec");
    this.laps = this.shadow.querySelector(".laps");
    this.clearAllBtn = this.shadow.querySelector(".lap-clear-btn");

    this.playBtn.addEventListener("click", this.play.bind(this))
    this.resetBtn.addEventListener("click", this.reset.bind(this))
    this.lapBtn.addEventListener("click", this.lap.bind(this))
    this.clearAllBtn.addEventListener("click", this.clearAll.bind(this))
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

  toggleBtn() {
    this.lapBtn.classList.remove("hidden")
    this.resetBtn.classList.remove("hidden")
  }

  play() {
    this.vibrate();

    if (!this.isPlay) {
      this.playBtn.innerHTML = "Pause"
      this.min = setInterval(() => {
        ++this.minCounter
        if (this.minCounter === 60) {
          this.minCounter = 0;
        }
        this.minute.innerHTML = `${this.minCounter.toString().padStart(2, '0')}:`;
      }, 60000);
      this.sec = setInterval(() => {
        ++this.secCounter
        if (this.secCounter === 60) {
          this.secCounter = 0;
        }
        this.second.innerHTML = `${this.secCounter.toString().padStart(2, '0')}:`;
      }, 1000);
      this.centiSec = setInterval(() => {
        ++this.centiCounter
        if (this.centiCounter === 100) {
          this.centiCounter = 0;
        }
        this.centiSecond.innerHTML = `${this.centiCounter.toString().padStart(2, '0')}`;
      }, 10);
      this.isPlay = true
      // isReset = true
    } else {
      this.playBtn.innerHTML = "Play"
      clearInterval(this.min)
      clearInterval(this.sec)
      clearInterval(this.centiSec)
      this.isPlay = false
      // isReset = false
    }
    this.toggleBtn();
  }

  reset() {
    this.vibrate();
    this.isPlay = true
    this.play()
    this.minCounter = 0
    this.secCounter = 0
    this.centiCounter = 0
    this.lapBtn.classList.add("hidden")
    this.resetBtn.classList.add("hidden")
    this.minute.innerHTML = `00:`
    this.second.innerHTML = `00:`
    this.centiSecond.innerHTML = `00`
    this.laps.innerHTML = ""
    this.clearAllBtn.classList.add("hidden")
  }

  lap() {
    this.vibrate();
    const li = document.createElement("li")
    const number = document.createElement("span")
    const timeStamp = document.createElement("span")
    
    li.setAttribute("class", "lap-item")
    number.setAttribute("class", "number")
    timeStamp.setAttribute("class", "time-stamp")
    
    number.innerHTML = `#${++this.lapId}`
    timeStamp.innerHTML = `${this.minCounter.toString().padStart(2, '0')}:${this.secCounter.toString().padStart(2, '0')} :${this.centiCounter.toString().padStart(2, '0')}`
    
    li.append(number, timeStamp)
    this.laps.append(li)
    
    this.clearAllBtn.classList.remove("hidden")
  }

  clearAll() {
    this.vibrate();
    this.laps.innerHTML = ""
    this.shadow.append(this.clearAllBtn)
    this.lapId = 0
    this.clearAllBtn.classList.add("hidden")
  }

  render() {
    this.shadow.innerHTML = `
      <style>
        :host {
          display: grid;
          grid-template-columns: 1fr;
          grid-template-rows: auto auto 1fr auto;
          align-items: center;
          gap: 1rem;
          background: var(--color-background);
          width: 100%;
          height: 100%;
          padding: 1rem;
          box-sizing: border-box;
        }

        :host h1 {
          width: 100%;
          margin: 0;
          color: var(--color-text);
        }

        :host .watch {
          display: grid;
          grid-template-columns: 1fr;
          grid-template-rows: 1fr auto;
          justify-items: center;
          row-gap: 20px;
        }

        :host .circle {
          width: 300px;
          height: 300px;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #ececec;
          border-radius: 50%;
          border: 14px solid #333;
          box-shadow: 0 2vw 4vw -1vw rgb(0 0 0 / 80%);
        }

        :host .text {
          font-size: 3rem;
          font-weight: 700;
        }

        :host .btn-wrapper {
          display: flex;
          gap: 2rem;
          justify-content: space-between;
        }

        :host .btn {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          border: 2px solid var(--color-text);
          background-color: var(--color-background);
          color: var(--color-text);
          cursor: pointer;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        :host .btn:hover {
          background-color: var(--color-text);
          color: var(--color-background);
        }

        :host .laps {
          list-style: none;
          color: var(--color-text);
          width: 100%;
          overflow: auto;
          display: flex;
          gap: 0.5rem;
          flex-direction: column;
          padding: 0;
          margin: 0;
          height: 40vh;
        }

        :host .laps::-webkit-scrollbar {
          display: none;
        }

        :host .lap-item {
          display: inline-flex;
          padding: 0.75rem;
          border: 3px solid var(--color-text);
          border-radius: 50px;
          justify-content: space-between;
          gap: 1rem;
        }

        :host .number {
          color: var(--color-text);
        }

        :host .lap-clear-btn {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 10px 0;
          border-radius: 50px;
          background-color: var(--color-text);
          cursor: pointer;
        }

        :host .hidden {
          visibility: hidden;
        }
      </style>
      <h1 class="title">Stopwatch</h1>
      <div class="watch">
        <div class="circle">
          <span class='text min'>00:</span>
          <span class='text sec'>00:</span>
          <span class='text msec'>00</span>
        </div>
        <div class="btn-wrapper">
          <button class='btn reset hidden'>Reset</button>
          <button class='btn play'>Play</button>
          <button class='btn lap hidden'>Lap</button>
        </div>
      </div>
      <ul class="laps">
      </ul>
      <button class="lap-clear-btn hidden">Clear All</button>
    `;
  };
}

customElements.define('os-tab-stopwatch', TabStopwatch);
