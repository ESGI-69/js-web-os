class App extends HTMLElement {
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
          display: grid;
          grid-template-columns: 1fr;
          grid-template-rows: auto 1fr auto;
          height: 100%;
        }
      </style>
      <os-topbar></os-topbar>
      <os-app-list></os-app-list>
      <os-dock class="dock"></os-dock>
      <os-app-wrapper></os-app-wrapper>
    `;
  }
}

customElements.define('app-root', App);