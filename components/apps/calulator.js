import {
  findSetting,
  getSettingValue,
} from '../../helpers/settingsHelper';

class appWrapper extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
    this.action = ""; // store operators
    this.prevVal = []; // store previous values
    this.turn = 1;
    this.firstTouch = true; // overwrite result text?
  }

  reset() {
    this.vibrate();
    this.result.textContent = 0;
    this.action = "";
    this.prevVal = [];
    this.firstTouch = true;
    this.turn = 1;
  }

  negative() {
    
    this.vibrate();

    let str = String(this.result.textContent); // store current value in a variable

    if (!this.action || !this.firstTouch) {
      str.includes('-') ? this.result.textContent = str.substr(1, str.length) : this.result.textContent = `-${str}`; // if includes "-" remove it, otherwise add "-"
    } else if (this.action && this.firstTouch) {
      str.includes('-') ? this.result.textContent = str.substr(1, str.length) : this.result.textContent = `-0`;
    }
  }

  float() {

    this.vibrate();

    let str = String(this.result.textContent); // store current value in a variable

    if (!this.action || !this.firstTouch) {
      if (!str.includes('.')) { // if doesn't include "." => add it
        this.result.textContent = `${str}.`
      }
    } else if (this.action && this.firstTouch){
      if (!str.includes('.')) {
        this.result.textContent = `${0}.`
      }
    }
  }

  percentage() {

    this.vibrate();

    let number = Number(this.result.textContent); // make sure it's a number
    this.result.textContent = number / 100;
  }

  number(num) {

    this.vibrate();

    let resultText = this.result.textContent;

    if (resultText === "-0") { // if current text is -0, replace 0
      this.result.textContent = `-${num}`;
      this.firstTouch = false;
    } else if (resultText === "0.") { // if current text is 0. append number
      this.result.textContent += num;
      this.firstTouch = false;
    } else if (resultText !== "0" && !this.firstTouch) {
      this.result.textContent += num;
    } else {
      this.result.textContent = num;
      this.firstTouch = false;
    }
    console.log(`clicked number: ${num}`);
  }

  operation(target) {

    this.vibrate();

    let operator = target.dataset.action;
    console.log(`clicked operator ${operator}`);

    // to allow chaining (has to be done before assigning a currentVal)
    if (this.turn > 1) {
      this.calculate.bind(this)();
    }

    let currentVal = Number(this.result.textContent);

    this.action = operator; //set global variable to data attribute of the button



    if (this.prevVal.length >= 2) { // if pressed operator after making prior calculations
      this.prevVal = [currentVal]; // replace the memory with current value on the screen
    } else {
      // To prevent storing values when pressing operator buttons
      !this.firstTouch ? this.prevVal.push(currentVal) : null; // TODO causes a bug if no numbers pressed
    }


    this.firstTouch = true;
    this.turn++;

    console.log(`memory: ${this.prevVal}`);
    console.log(`turn no.: ${this.turn}`);

  }

  calculate() {
    
    this.vibrate();

    let currentVal = Number(this.result.textContent);
    
    function values() {
      
      if (this.prevVal.length >= 2) {
        this.prevVal.shift();
        this.prevVal.unshift(currentVal);
      } else {
        this.prevVal.push(currentVal);
      }
    }

    switch(this.action) {

      case "add":
        values.bind(this)();
        this.result.textContent = this.prevVal.reduce((a, b) => a + b);
        break;

      case "substract":
        values.bind(this)();
        this.result.textContent = this.prevVal.reduce((a, b) => a - b);
        break;

      case "divide":
        values.bind(this)();
        this.result.textContent = this.prevVal.reduce((a, b) => a / b);
        break;

      case "multiply":
        values.bind(this)();
        this.result.textContent = this.prevVal.reduce((a, b) => a * b);
        break;

    }

    this.firstTouch = true;
    this.turn = 1;
    console.log(`========Calc========`);
    console.log(`memory: ${this.prevVal[0]} ${this.action} ${this.prevVal[1]}}`);
    console.log(`Turn no.: ${this.turn}`);
  }

  connectedCallback() {
    this.render();
    this.result = this.shadow.querySelector('.js-result');
    this.buttons = this.shadow.querySelectorAll('button');
    this.addEventToButtons();
  }

  vibrate() {
    if (navigator.vibrate) {
      if (getSettingValue(findSetting('os-vibration'))) {
        console.log('vibrating');
        navigator.vibrate(100);
      }
    } else {
      console.log('vibration not supported');
    }
  }

  addEventToButtons() {
    // add events to all buttons
    this.buttons.forEach(function(el) {

      switch(el.dataset.action) {

        case 'clear':
          el.addEventListener('click', this.reset.bind(this));
          break;

        case 'number':
          el.addEventListener('click', function(e) {
            let target = e.target || e.srcElement;
            this.number(target.textContent);
          }.bind(this));
          break;

        case 'negative':
          el.addEventListener('click', this.negative.bind(this));
          break;

        case 'percentage':
          el.addEventListener('click', this.percentage.bind(this));
          break;

        case 'float':
          el.addEventListener('click', this.float.bind(this));
          break;

        case 'divide':
        case 'multiply':
        case 'substract':
        case 'add':
          el.addEventListener('click', function(e) {
            this.operation(e.target || e.srcElement)
          }.bind(this));
          break;

        case 'result':
          el.addEventListener('click', this.calculate.bind(this));
          break;
      }
    }.bind(this));
  }

  render() {
    this.shadow.innerHTML = `
      <style>
        :host .calc {
          height: 100%;
          display: grid;
          padding: 1rem;
          margin: auto;
          background-color: #1c1c1c;
          font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
          font-size: 1rem;
          line-height: 1.2;
          color: #fff;
          -webkit-font-smoothing: antialiased;
        }
        :host * {
          box-sizing: border-box;
        }
        :host .calc .calc-screen {
          display: flex;
          justify-content: flex-end;
          align-items: flex-end;
          margin-bottom: 1rem;
          background-color: transparent;
          font-size: 5rem;
          border-radius: 4px;
          overflow-y: auto;
          font-weight: 300;
        }
        :host .calc .calc-grid {
          display: grid;
          grid-template: repeat(5, 1fr) / repeat(4, 1fr);
          grid-gap: 10px;
        }
        :host .calc .btn-span {
          grid-area: 5 / 1 / 5 / span 2;
          width: 100%;
        }
        :host .calc button {
          position: relative;
          cursor: pointer;
          padding: 0;
          border: 0;
          outline: 0;
          width: 100%;
          height: 100%;
          background-color: #333;
          color: #fff;
          font-size: 2rem;
          line-height: 100%;
          border-radius: 200px;
          display: flex;
          align-items: center;
          justify-content: center;
          user-select: none;
          transition: color .15s ease, background-color .15s ease;
        }

        :host .calc button::after {
          content: "";
          position: absolute;
          top: 0;
          right: 0;
          width: 100%;
          height: 100%;
          background-color: #fff;
          border-radius: 200px;
          opacity: 0;
          transition: opacity .15s ease;
        }

        :host .calc button:hover:after {
          opacity: .25;
        }

        :host .calc button.light {
          background-color: #A5A5A5;
          color: #1c1c1c;
        }

        :host .calc button.action {
          background-color: #FF9503;
        }

        :host .calc button.action:not(:last-child):focus: {
          background-color: #fff;
          color: #ff9503;
        }

        :host #close {
          position: absolute;
          top: 0;
          right: 0;
        }
      </style>
      <div class="calc">
        <div class="calc-screen">
          <span class="js-result">0</span>
        </div>
        <div class="calc-grid">
          <button data-action="clear" class="ligth">AC</button>
          <button data-action="negative" class="ligth">&plusmn;</button>
          <button data-action="percentage" class="ligth">%</button>
          <button data-action="divide" class="action">&divide;</button>
          
          <button data-action="number">7</button>
          <button data-action="number">8</button>
          <button data-action="number">9</button>
          <button data-action="multiply" class="action">&times;</button>
          
          <button data-action="number">4</button>
          <button data-action="number">5</button>
          <button data-action="number">6</button>
          <button data-action="substract" class="action">&minus;</button>
          
          <button data-action="number">1</button>
          <button data-action="number">2</button>
          <button data-action="number">3</button>
          <button data-action="add" class="action">+</button>
          
          <button data-action="number" class="btn-span">0</button>
          <button data-action="float">.</button>
          <button data-action="result" class="action">&equals;</button>
        </div>
      </div>
    `;
  }
}

customElements.define('os-app-calculator', appWrapper);
