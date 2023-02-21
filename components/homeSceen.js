import allApps from '../allApps';

class HomeScreen extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
    this.notInDockApps = allApps.filter((app) => app.isInDock !== true);
  }

  genererateHtmlForApps() {
    const app = this.notInDockApps.map((app) => {
      return `
        <os-app-icon id="${app.id}" name="${app.name}" icon="${app.icon}" show-name></os-app-icon>
      `;
    });
    return app.join("");
  }

  connectedCallback() {
    this.render();
    for (let i = 0; i < this.notInDockApps.length; i++) {
      const appId = this.notInDockApps[i].id;
      const appElement = this.shadow.getElementById(appId)
      appElement.addEventListener('click', () => {
        document.dispatchEvent(new CustomEvent('open-app', { detail: {
          id: appId
        }}));
      });
    }
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          padding: 2rem;
          display: grid;
          grid-gap: 2rem;
          grid-template-columns: repeat(auto-fill, 50px);
          justify-content: center;
          grid-template-rows: repeat(auto-fill, 73px);
        }
      </style>
      ${this.genererateHtmlForApps()}
    `;
  }
}

customElements.define("os-home-screen", HomeScreen);
