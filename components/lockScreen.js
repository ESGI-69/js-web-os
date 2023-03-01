import { 
  findSetting,
  getSettingValue
} from "../helpers/settingsHelper";

class LockScreen extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
    this.password = getSettingValue(findSetting('lockscreen-password'));
  }

  connectedCallback() {
    this.render();
    this.getLockScreen();
  }

  getLockScreen() {
    const method = getSettingValue(findSetting('lockscreen-method'));
    if (method === 'none') {
      this.sliderLockScreen();
    } else if (method === 'password') {
      this.passwordLockScreen();
    }
  }

  sliderLockScreen() {
    this.unlockButton = this.shadow.querySelector('#slider');
    this.unlockButton.addEventListener('click', () => {
      this.unlock();
    }); 
  }

  passwordLockScreen() {
    this.passwordInput = this.shadow.querySelector('#password');
    this.submitButton = this.shadow.querySelector('#submit-password');
  
    const submitHandler = () => {
      if (this.passwordInput.value === this.password) {
        console.log("password correct");
        this.unlock();
      } else {
        console.log("password incorrect");
        this.shadow.querySelector('#wrong-password').style.display = "block";
      }
    };
  
    this.submitButton.addEventListener('click', submitHandler);
  
    this.passwordInput.addEventListener('keydown', (event) => {
      if (event.keyCode === 13) {
        event.preventDefault();
        submitHandler();
      }
    });
  }

  
  unlock() {
    this.remove();
  } 
 
  generateHtmlWithSettings() {
    const method = getSettingValue(findSetting('lockscreen-method'));
    if (method === 'none') {
      return `
        <div id="container">
          <div id="slider">
            <img id="unlock" src="./assets/images/app-icons/unlock.svg">
          </div>
          <p>Slide to unlock</p>
        </div>
      `;
    } else if (method === 'password') {
      return `
        <div id="container-password">
          <input type="password" id="password" placeholder="Password">
          <button id="submit-password">Unlock</button>
        </div>
      `;
    }
  }

  render() {
    this.shadow.innerHTML = `
      <style>
        :host {
          position: fixed;
          top: 30px;
          left: 0;
          width: 100%;
          height: 100%;
          background: var(--color-dock-background);
          backdrop-filter: blur(10px);
          z-index: 1000;
        }

        :host #unlock {
          position:absolute;
          width: 1em;
          height: 1em;
          left:0;
          right:0;
          margin: auto;
          color: white;
          font-size:18px;
          line-height: 61px;
          cursor:pointer;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;  
        }

        :host #container-password {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 50%;
          flex-direction: column;
        }

        :host #container-password #password {
          width: 200px;
          height: 30px;
          padding: 16px;
          background-color: transparent;
          border: 1px solid var(--color-dock-background);
          border-radius: 16px;
          color: white;
          font-size: 18px;
        }

        :host #container-password #password::placeholder {
          color: var(--color-dock-background);
        }
        

        :host #submit-password {
          margin-top: 3rem;
          border: 1px solid var(--color-dock-background);
          border-radius: 16px;
          color: var(--color-text);
          font-size: 18px;
          padding: 16px 32px;
          background-color: transparent;
        }

        :host #container {
          top: 65%;
          width:270px;
          height:65px;
          background: var(--color-dock-background);
          margin-left:auto;
          margin-right:auto;
          display:block;
          margin-top:30px;
          border-radius:40px;
          position:relative;
          box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
          transition:all 0.3s;
        }

        :host  p {
          text-align:center;
          line-height:65px;
          color:#DDD;
        }

        :host #slider {
          justify-content: center;
          display: flex;
          flex-direction: row;
          align-items: center;
          position:absolute;
          width:61px;
          height:61px;
          top:0;
          bottom:0;
          margin:auto;
          background: var(--color-dock-background);
          border-radius:40px;
          left: 2px;
           box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
        }
        
        :host #slider:before {
          content:"";
          display: block;
          position:absolute;
          width:33px;
          height:32px;
          left:0;
          right:0;
          top:0;
          bottom:0;
          margin:auto;
          border-radius:40px;
          cursor:pointer;
        }

      </style>
      ${this.generateHtmlWithSettings()}
      <p id="wrong-password" style="display: none;"> Wrong password </p>
    `;
  }
}

customElements.define('os-lock-screen', LockScreen);
