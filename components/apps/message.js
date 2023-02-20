class appMessage extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadow.innerHTML = `
      <style>
        :host {
          display: block;
          background-color: green;
        }
      </style>
      <span>Message</span>
      <span>Coucou c'est Maman</span>
    `;
  }
}

customElements.define('os-app-message', appMessage);
