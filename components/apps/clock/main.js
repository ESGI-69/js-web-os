class TabClock extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });

    this.weekday = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
  }

  connectedCallback() {
    this.render();

    this.clock()
    this.interval = setInterval(this.clock.bind(this), 100);
  }

  disconnectedCallback() {
    clearInterval(this.interval);
  }

  clock() {
    const dateInstance = new Date(),
      hour = dateInstance.getHours(),
      minute = dateInstance.getMinutes(),
      second = dateInstance.getSeconds(),
      date = dateInstance.getDate(),
      month = dateInstance.getMonth() + 1,
      year = dateInstance.getFullYear(),
          
      hourDegre = hour * 30 + minute * (360/720),
      minutesDegre = minute * 6 + second * (360/3600),
      secondDegre = second * 6,
    
      hourEl = this.shadow.querySelector('.hour-hand'),
      minuteEl = this.shadow.querySelector('.minute-hand'),
      secondEl = this.shadow.querySelector('.second-hand'),
      dateEl = this.shadow.querySelector('.date'),
      dayEl = this.shadow.querySelector('.day'),
      dayOfTheWeek = this.weekday[dateInstance.getDay()];
    
    hourEl.style.transform = "rotate("+hourDegre+"deg)";
    minuteEl.style.transform = "rotate("+minutesDegre+"deg)";
    secondEl.style.transform = "rotate("+secondDegre+"deg)";
    dateEl.innerHTML = `${date.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year}`;
    dayEl.innerHTML = dayOfTheWeek;
  }

  render() {
    this.shadow.innerHTML = `
      <style>
        :host {
          background: #ececec;
          width: 300px;
          height: 300px;
          margin: auto;
          border-radius: 50%;
          border: 14px solid #333;
          position: relative;
          box-shadow: 0 2vw 4vw -1vw rgba(0,0,0,0.8);
        }

        :host .dot {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: #ccc;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          margin: auto;
          position: absolute;
          z-index: 10;
          box-shadow: 0 2px 4px -1px black;
        }
        
        :host .hour-hand {
          position: absolute;
          z-index: 5;
          width: 4px;
          height: 65px;
          background: #333;
          top: 79px;
          transform-origin: 50% 72px;
          left: 50%;
          margin-left: -2px;
          border-top-left-radius: 50%;
          border-top-right-radius: 50%;
        }
        
        :host .minute-hand {
          position: absolute;
          z-index: 6;
          width: 4px;
          height: 100px;
          background: #666;
          top: 46px;
          left: 50%;
          margin-left: -2px;
          border-top-left-radius: 50%;
          border-top-right-radius: 50%;
          transform-origin: 50% 105px;
        }
        
        :host .second-hand {
          position: absolute;
          z-index: 7;
          width: 2px;
          height: 120px;
          background: gold;
          top: 26px;
          lefT: 50%;
          margin-left: -1px;
          border-top-left-radius: 50%;
          border-top-right-radius: 50%;
          transform-origin: 50% 125px;
        }
        
        span {
          display: inline-block;
          position: absolute;
          color: #333;
          font-size: 22px;
          font-family: var(--font-family);
          font-weight: 700;
          z-index: 4;
        }
        
        :host .h12 {
          top: 30px;
          left: 50%;
          margin-left: -9px;
        }
        :host .h3 {
          top: 140px;
          right: 30px;
        }
        :host .h6 {
          bottom: 30px;
          left: 50%;
          margin-left: -5px;
        }
        :host .h9 {
          left: 32px;
          top: 140px;
        }
        
        :host .diallines {
          position: absolute;
          z-index: 2;
          width: 2px;
          height: 15px;
          background: #666;
          left: 50%;
          margin-left: -1px;
          transform-origin: 50% 150px;
        }
        :host .diallines:nth-of-type(5n) {
          position: absolute;
          z-index: 2;
          width: 4px;
          height: 25px;
          background: #666;
          left: 50%;
          margin-left: -1px;
          transform-origin: 50% 150px;
        }
        
        :host .info {
          position: absolute;
          width: 120px;
          height: 20px;
          border-radius: 7px;
          background: #ccc;
          text-align: center;
          line-height: 20px;
          color: #000;
          font-size: 11px;
          top: 200px;
          left: 50%;
          margin-left: -60px;
          font-family: var(--font-family);
          z-index: 3;
          letter-spacing: 3px;
          margin-left: -60px;
          left: 50%;
        }
        :host .date {
            top: 80px;
          }
        :host .day {
            top: 200px;
        }
      </style>
      <div>
        <div class="info date"></div>
        <div class="info day"></div>
      </div>
      <div class="dot"></div>
      <div>
        <div class="hour-hand"></div>
        <div class="minute-hand"></div>
        <div class="second-hand"></div>
      </div>
      <div>
        <span class="h3">3</span>
        <span class="h6">6</span>
        <span class="h9">9</span>
        <span class="h12">12</span>
      </div>
      <div class="diallines"></div>
    `;

    for (var i = 1; i < 60; i++) {
      this.shadow.innerHTML += "<div class='diallines'></div>";
      this.dialLines = this.shadow.querySelectorAll('.diallines');
      this.dialLines[i].style.transform = "rotate(" + 6 * i + "deg)";
    }
  };
}

customElements.define('os-tab-clock', TabClock);
