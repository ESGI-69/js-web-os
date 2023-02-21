import {
  findSetting,
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
        if (setting.dependsOn
          && getSettingValue(findSetting(setting.dependsOn)) !== setting.dependsOnValue) {
          return;
        }
        const isSettingDependent = setting.dependsOn ? true : false;
        html += `
          <div class="setting ${isSettingDependent ? 'dependent' : ''}">
            <div class="setting-name">${setting.name}</div>
            <div class="setting-value" id="${setting.id}">
        `;
        if (setting.type === 'checkbox') {
          html += `
              <input type="${setting.type}" name="${setting.localStorageKey}" ${getSettingValue(setting) ? 'checked' : ''}>  
              <label for="${setting.localStorageKey}"></label>
            </div>
          </div>
          `;
        } else if (setting.type === 'text') {
          html += `
              <input type="${setting.type}" name="${setting.localStorageKey}" value="${getSettingValue(setting)}">  
            </div>
          </div>
          `;
        } else if (setting.type === 'select') {
          html += `
              <select name="${setting.localStorageKey}">
          `;
          setting.options.forEach((option) => {
            html += `
              <option value="${option.value}" ${getSettingValue(setting) === option.value ? 'selected' : ''}>${option.name}</option>
            `;
          });
          html += `
              </select>
            </div>
          </div>
          `;
        }
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

    this.render();
  }

  defineEventListeners() {
    settings.forEach((category) => {
      category.settings.forEach((setting) => {
        if (setting.dependsOn
          && getSettingValue(findSetting(setting.dependsOn)) !== setting.dependsOnValue) {
          return;
        }
        const settingValue = this.shadow.querySelector(`#${setting.id}`);
        settingValue.addEventListener('change', (event) => {
          console.log('change', setting.name, event);
          if (setting.type === 'checkbox') {
            this.changeSettingValue(setting, event.target.checked);
          } else if (setting.type === 'text') {
            this.changeSettingValue(setting, event.target.value);
          } else if (setting.type === 'select') {
            this.changeSettingValue(setting, event.target.value);
          }
        });
      });
    });
  }

  connectedCallback() {
    this.render();
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
        :host .category .settings .setting.dependent {
          padding-left: 1.5rem;
        }
        :host .category .settings .setting:last-child {
          border-bottom: none;
        }
      </style> 
      <h1>Settings</h1>
      ${this.generateSettings(settings)}
    `;
    this.defineEventListeners();
  }
}

customElements.define('os-app-settings', appSettings);
