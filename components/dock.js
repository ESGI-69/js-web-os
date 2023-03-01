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
          id: appId,
          pushHistory: true,
        }}));
      });
    }

    this.shadow.querySelector('#lock').addEventListener('click', () => {
      document.dispatchEvent(new CustomEvent('lock'));
    }
    );

  }

  render() {
    this.shadow.innerHTML = `
      <style>
        :host {
          padding: 1rem 2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;

          background: var(--color-dock-background);
          backdrop-filter: blur(10px);
        }
      </style>
      ${this.iconsInDock}
      <img id="lock" src="./assets/images/app-icons/lock.png" width=50px height=50px>
    `;
  }

  get iconsInDock() {
    const dockIcons = allApps.filter((app) => app.isInDock);
    const appIcons = dockIcons.map((app) => {
      return `
        <os-app-icon id="${app.id}" name="${app.name}" icon="${app.icon}"></os-app-icon>
      `;
    });
    if (appIcons.length !== 4) {
      console.warn('Dock should have 4 icons for lookin good');
    }
    return appIcons.join('');
  }

  get idInDock() {
    const dockIcons = allApps.filter((app) => app.isInDock);
    const appIds = dockIcons.map((app) => app.id);
    return appIds;
  }
}

customElements.define('os-dock', Dock);
