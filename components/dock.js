import allApps from '../allApps';

class Dock extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
    for (let i = 0; i < this.idInDock.length; i++) {
      const appId = this.idInDock[i];      
      const app = this.shadow.getElementById(appId)
      app.addEventListener('click', () => {
        document.dispatchEvent(new CustomEvent('open-app', { detail: {
          id: appId
        },
      }));
      });
    }
  }

  disconnectedCallback() {
    console.log('disconnectedCallback');
  }
  
  render() {
    this.shadow.innerHTML = `
      <style>
        :host {
          padding: 1rem;
          display: grid;
          grid-template-columns: repeat(4, auto);
          grid-template-rows: 1fr;
          justify-content: space-around;

          background: var(--color-dock-background);
          backdrop-filter: blur(10px);
        }
      </style>
      ${this.iconsInDock}
    `;
  }

  get iconsInDock() {
    const dockIcons = allApps.filter((app) => app.isInDock);
    const appIcons = dockIcons.map((app) => {
      return `
        <os-app-icon id="${app.id}" name="${app.name}" icon="${app.icon}"></os-app-icon>
      `;
    });
    return appIcons.join('');
  }

  get idInDock() {
    const dockIcons = allApps.filter((app) => app.isInDock);
    const appIds = dockIcons.map((app) => app.id);
    // console.log(appIds);
    return appIds;
  }
}

customElements.define('os-dock', Dock);
