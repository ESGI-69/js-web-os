import {
  getSettingValue,
  settings,
} from '../../helpers/settingsHelper';

class appSettings extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
  }

  generateSettings(settings) {
    let html = '';
    settings.forEach((category) => {
      html += `
        <div class="category">
          <h2 class="category-title">${category.categoryName}</h2>
          <div class="settings">
      `;
      category.settings.forEach((setting) => {
        html += `
          <div class="setting">
            <div class="setting-name">${setting.name}</div>
            <div class="setting-value" id="${setting.id}">
              <input type="${setting.type}" name="${setting.localStorageKey}" ${getSettingValue(setting) ? 'checked' : ''}>  
              <label for="${setting.localStorageKey}"></label>
            </div>
          </div>
        `;
      });
      html += `
          </div>
        </div>
      `;
    });
    return html;
  }

  changeSettingValue(setting, value) {
    localStorage.setItem(setting.localStorageKey, value);

    document.dispatchEvent(new CustomEvent('changeSetting', {
      detail: {
        setting: setting.id,
        value: value,
      },
    }));
  }

  defineEventListeners() {
    settings.forEach((category) => {
      category.settings.forEach((setting) => {
        const settingValue = this.shadow.querySelector(`#${setting.id}`);
        settingValue.addEventListener('change', (event) => {
          this.changeSettingValue(setting, event.target.checked);
        });
      });
    });
  }

  connectedCallback() {
    this.render();
    this.defineEventListeners();
  }

  render() {
    this.shadow.innerHTML = `
      <style>
        :host {
          display: flex !important;
          flex-direction: column;
          background-color: var(--color-background);
          color: var(--color-text);
          padding: 1rem;
          gap: 1rem;
        }
        :host h1 {
          font-size: 2rem;
          font-weight: bold;
          margin: 0;
        }
        :host .category .category-title {
          font-size: 1.3rem;
          font-weight: 500;
          margin: 0;
          margin-bottom: 0.5rem;
        }
        :host .category .settings {
          display: flex;
          flex-direction: column;
          background-color: var(--color-background-light);
          box-sizing: border-box;
          border-radius: 0.5rem;
        }
        :host .category .settings .setting {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          padding: 0.5rem;
          border-bottom: 1px solid var(--color-background-lighter);
        }
        :host .category .settings .setting:last-child {
          border-bottom: none;
        }
      </style> 
      <h1>Settings</h1>
      ${this.generateSettings(settings)}
    `;
  }
}

customElements.define('os-app-settings', appSettings);
