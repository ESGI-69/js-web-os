class appWrapper extends HTMLElement {
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
        id: 'calculator',
      },
    }));
  };

  render() {
    this.shadow.innerHTML = `
      <style>
        :host {
          display: block;
          background-color: red;
        }
      </style>
      <button id="close">Close the app</button>
      <span>Calculator</span>
      <span>1+1=2</span>
    `;
  }
}

customElements.define('os-app-calculator', appWrapper);
