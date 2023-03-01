import {
  findSetting,
  getSettingValue,
} from '../helpers/settingsHelper';

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
      this.noPasswordLockScreen();
    } else if (method === 'password') {
      this.passwordLockScreen();
    }
  }

  noPasswordLockScreen() {
    this.unlockButton = this.shadow.querySelector('#unlock');
    this.unlockButton.addEventListener('click', () => {
      this.unlock();
    });
  }

  passwordLockScreen() {
    this.passwordInput = this.shadow.querySelector('#password');
    this.submitButton = this.shadow.querySelector('#submit-password');
  
    const submitHandler = () => {
      if (this.passwordInput.value === '') return;
      if (this.passwordInput.value === this.password) {
        this.unlock();
      } else {
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
          <p>You can secure your connection by adding a password in the settings</p>
          <button id="unlock">
            Unlock
          </button>
        </div>
      `;
    } else if (method === 'password') {
      return `
        <div id="container-password">
          <div class="form">
            <input type="password" id="password" placeholder="Password">
            <button id="submit-password">
              Unlock
            </button>
          </div>
          <p id="wrong-password" style="display: none;"> Wrong password </p>
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

        :host #container-password {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%;
          flex-direction: column;
          gap: 1rem;
        }

        :host #container-password #password {
          width: 200px;
          padding: 0.75rem 1.5rem;
          background-color: var(--color-text);
          border: 1px solid var(--color-dock-background);
          border-radius: 16px;
          color: white;
          font-size: 18px;
        }

        :host #container-password #password::placeholder {
          color: var(--color-dock-background);
        }
        

        :host #submit-password, :host #unlock {
          border: 1px solid var(--color-dock-background);
          border-radius: 16px;
          color: var(--color-text);
          font-size: 18px;
          padding: 0.75rem 1.5rem;
          background-color: var(--color-background);
        }

        :host .form {
          display: flex;
          gap: 1rem;
          align-items: center;
        }

        :host #container {
          width: 100%;
          height: 100%;
          background: var(--color-dock-background);
          box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
          transition:all 0.3s;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 1rem;
        }

        :host  p {
          text-align:center;
          color: var(--color-text);
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

        :host #wrong-password {
          color: var(--color-red-dark);
          font-size: 1.5rem;
          font-weight: 600;
        }

      </style>
      ${this.generateHtmlWithSettings()}
    `;
  }
}

customElements.define('os-lock-screen', LockScreen);
