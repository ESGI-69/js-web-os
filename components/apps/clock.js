import allApps from '../../allApps';

class AppClock extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
    this.app = allApps.find((app) => app.id === 'os-app-clock');
    this.tabs = this.app.tabs;
    this.curentTab = this.app.defaultTab;
  }

  connectedCallback() {
    this.render();
  }

  changeTab(tabId) {
    this.curentTab = this.tabs.find((tab) => tab.id === tabId).tag;
    this.render();
  }

  render() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const timeString = `${hours}:${minutes}:${seconds}`;
    this.shadow.innerHTML = `
      <style>
        :host {
          display: grid !important;
          grid-template-columns: 1fr;
          grid-template-rows: 1fr 5rem;
          background: var(--color-background);
        }
        
        :host .tabs {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          align-items: center;
          background: var(--color-background-light);
        }
        
        :host .tabs .tab {
          cursor: pointer;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
        }
        
        :host .tabs .tab span {
          font-size: 0.8rem;
          color: var(--color-text);
        }
        
        :host .tabs .tab.active span {
          font-weight: bold;
          font-size: 1rem;
        }
      </style>
      <${this.curentTab}></${this.curentTab}>
      <div class="tabs">
        ${this.tabs.map((tab) => {
          return `
            <div class="tab ${this.curentTab === tab.tag ? 'active' : ''}" id="${tab.id}">
              <${tab.icon}></${tab.icon}>
              <span>${tab.name}</span>
            </div>
          `;
        }).join('')}
      </div>
    `;

    this.shadow.querySelectorAll('.tab').forEach((tab) => {
      tab.addEventListener('click', () => {
        this.changeTab(tab.id);
      });
    });
  }
}

customElements.define('os-app-clock', AppClock);
