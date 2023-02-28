class LockScreen extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();

    this.unlockButton = this.shadow.querySelector('#slider');
    this.unlockButton.addEventListener('click', () => {
      this.unlock();
    });

  }

  unlock() {
    this.remove();
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

        :host #container {
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
      <div id="container">
        <div id="slider">
          <img id="unlock" src="./assets/images/app-icons/unlock.svg">
        </div>
        <p>Slide to unlock</p>
      </div>
    `;
  }
}

customElements.define('os-lock-screen', LockScreen);
