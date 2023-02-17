class appMessage extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
    this.shadow.querySelector('#close').addEventListener('click', () => {
      this.closeApp();
    });
  }

  closeApp() {
    document.dispatchEvent(new CustomEvent('close-app', {
      detail: {
        id: 'message',
      },
    }));
  };

  render() {
    this.shadow.innerHTML = `
      <style>
        :host {
          display: block;
          background-color: green;
        }
      </style>
      <button id="close">Close the app</button>
      <span>Message</span>
      <span>Coucou c'est Maman</span>
    `;
  }
}

customElements.define('os-app-message', appMessage);
