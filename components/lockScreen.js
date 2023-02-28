class LockScreen extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();

    this.unlockButton = this.shadow.querySelector('#unlock');
    this.unlockButton.addEventListener('click', () => {
      this.unlock();
    });

  }

  unlock() {
    document.dispatchEvent(new CustomEvent('unlock'));
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

      </style>
      <div id="cc">
        <button id="unlock">Unlock</button>
      </div>
    `;
  }
}

customElements.define('os-lock-screen', LockScreen);
