class appTictactoe extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open'}); 
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadow.innerHTML = `
      <style>
        :host {
          display: block;
          background-color: orange;
        }
      </style>
      <span>Coucou c'est tic tac toe</span>
    `;
  }

}

customElements.define('os-app-tictactoe', appTictactoe);