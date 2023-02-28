class App extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
    document.addEventListener('lock', () => {
      this.shadow.innerHTML+="<os-lock-screen></os-lock-screen>"
    });
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
      <os-home-screen></os-home-screen>
      <os-dock class="dock"></os-dock>
      <os-app-wrapper></os-app-wrapper>
      <os-lock-screen></os-lock-screen>
    `;
  }
}

customElements.define('app-root', App);
