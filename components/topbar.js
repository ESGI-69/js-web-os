import BatteryEmptyIcon from '../assets/images/icons/battery-empty.svg';
import BatteryFullIcon from '../assets/images/icons/battery-full.svg';
import BatteryHalfIcon from '../assets/images/icons/battery-half.svg';
import BatteryQuarterIcon from '../assets/images/icons/battery-quarter.svg';
import BatteryThreeQuartersIcon
  from '../assets/images/icons/battery-three-quarters.svg';
import BellSlashIcon from '../assets/images/icons/bell-slash.svg';
import BellIcon from '../assets/images/icons/bell.svg';
import BoltIcon from '../assets/images/icons/bolt.svg';

class Topbar extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
    this.isTimeVisible = true;
    this.isVibrationVisible = true;
    this.isDateVisible = true;
    this.isPingVisible = true;
    this.isBatteryVisible = true;
    this.reponseTimes = [];
    this.pingInterval = null
  }

  connectedCallback() {
    this.render();
    this.updateTime();
    setInterval(() => {
      this.updateTime();
    }, 1000);
    this.checkPing();
    this.checkBattery();
  }

  updateTime() {
    const today = new Date();
    let hour = today.getHours();
    hour = hour.length < 10 ? `0${hour}` : hour;
    let minutes = today.getMinutes();
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    let seconds = today.getSeconds();
    seconds = seconds < 10 ? `0${seconds}` : seconds;
    let day = today.getDate();
    day = day.length < 10 ? `0${day}` : day;
    let month = today.getMonth() + 1;
    month = month < 10 ? `0${month}` : month;
    const year = today.getFullYear();

    if (this.isTimeVisible) {
      const time = this.shadow.querySelector('.hour');
      time.textContent = `${hour}:${minutes}:${seconds}`;
    }

    if (this.isDateVisible) {
      const date = this.shadow.querySelector('.date');
      date.textContent = `${day}/${month}/${year}`;
    }
  }

  checkPing() {
    if (this.isPingVisible) {
      this.pingInterval = setInterval(() => {
        const timeStart = Date.now();
        fetch('https://jsonplaceholder.typicode.com/todos/1')
          .then((response) => response.json())
          .then(() => {
            const timeEnd = Date.now();
            const responseTime = timeEnd - timeStart;
            this.reponseTimes.push(responseTime);
            if (this.reponseTimes.length > 5) {
              this.reponseTimes.shift();
            }
            const averageResponseTime = this.reponseTimes.reduce((a, b) => a + b) / this.reponseTimes.length;
            const ping = this.shadow.querySelector('.ping');
            if (this.reponseTimes.length === 5) {
              ping.textContent = `${Math.round(averageResponseTime)}ms`;
            }
          });
      }, 1000);
    } else if (this.pingInterval) {
      clearInterval(this.pingInterval);
    }
  }

  checkBattery() {
    if (!this.isBatteryVisible) return;
    const batteryLevel = this.shadow.querySelector('.battery');
    if (navigator.getBattery) {
      const changeBatteryLevel = (level, isCharging) => {
        let innerHTML = `${Math.round(level * 100)}%`;
        if (isCharging) {
          innerHTML += `<img src="${BoltIcon}">`;
        } else if (level >= 0.75) {
          innerHTML += `<img src="${BatteryFullIcon}">`;
        } else if (level >= 0.5) {
          innerHTML += `<img src="${BatteryThreeQuartersIcon}">`;
        } else if (level >= 0.25) {
          innerHTML += `<img src="${BatteryHalfIcon}">`;
        } else if (level >= 0.1) {
          innerHTML += `<img src="${BatteryQuarterIcon}">`;
        } else {
          innerHTML += `<img src="${BatteryEmptyIcon}">`;
        }
        batteryLevel.innerHTML = innerHTML;
      };

      navigator.getBattery().then((battery) => {
        changeBatteryLevel(battery.level, battery.charging);
        battery.addEventListener('levelchange', () => {
          changeBatteryLevel(battery.level, battery.charging);
        });
      });
    } else {
      console.warn('Battery API not supported');
      batteryLevel.innerHTML = `--- <img src="${BatteryHalfIcon}">`;
    }
  }

  addTopbarItems() {
    const left = document.createElement('div');
    left.classList.add('left');

    const center = document.createElement('div');
    center.classList.add('center');

    const right = document.createElement('div');
    right.classList.add('right');

    if (this.isTimeVisible) {
      const time = document.createElement('span');
      time.classList.add('hour');
      time.textContent = '12:00';
      left.append(time);
    }

    if (this.isVibrationVisible) {
      const vibration = document.createElement('span');
      vibration.classList.add('vibration');
      vibration.innerHTML = `<img src="${BellIcon}"> <img src="${BellSlashIcon}">`;
      left.append(vibration);
    }

    if (this.isDateVisible) {
      const date = document.createElement('span');
      date.classList.add('date');
      center.append(date);
    }

    if (this.isPingVisible) {
      const ping = document.createElement('span');
      ping.classList.add('ping');
      ping.textContent = '--- ms';
      right.append(ping);
    }

    if (this.isBatteryVisible) {
      const battery = document.createElement('span');
      battery.classList.add('battery');
      battery.textContent = '100%';
      right.append(battery);
    }
    
    this.shadow.append(left, center, right);
  }

  render() {
    this.shadow.innerHTML = `
      <style>
        :host {
          color: #fff;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-template-rows: 1fr;
          grid-template-areas: "left center right";
          grid-gap: 0.5rem;
          align-items: center;
          padding: 0 1rem;
          height: 30px;

          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(10px);

          font-size: 0.8rem;
        }
        :host span.date {
          font-size: 0.9rem;
        }
        :host .left, .center, .right {
          display: flex;
          gap: 0.5rem;
          align-items: center;
        }
        :host .left > *, .center > *, .right > * {
          display: flex;
          align-items: center;
        }
        :host .left {
          grid-area: left;
          justify-content: flex-start;
        }
        :host .center {
          grid-area: center;
          justify-content: center;
        }
        :host .right {
          grid-area: right;
          justify-content: flex-end;
        }

        :host .right .battery img {
          padding-left: 0.2rem;
        }
      </style>
    `;
    this.addTopbarItems();
  }
}

customElements.define('os-topbar', Topbar);
