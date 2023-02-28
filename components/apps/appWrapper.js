import allApps from '../../allApps';

class appWrapper extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
    this.app = null;
  }

  connectedCallback() {
    this.render();
    document.addEventListener('open-app', ({ detail }) => {
      this.openApp(detail.id, detail.pushHistory);
    });

    this.shadow.querySelector('#close').addEventListener('click', () => {
      this.closeApp(true);
    });

    document.addEventListener('close-app', ({ detail }) => {
      this.closeApp(detail.pushHistory);
    });

    // oberver
    this.observer = new MutationObserver(() => {
      this.render();
    });

    this.observer.observe(this, {
      childList: true,
      subtree: true,
    });
  }

  changeUrl(history) {
    let url;
    if (!this.app) {
      url = new URL('', window.location.href);
    } else {
      url = new URL(`#${this.app.id}`, window.location.href);
    }
    if (history) {
      window.history.pushState({}, '', url);
    }
  }

  openApp(appId, pushHistory) {
    this.app = allApps.find((app) => app.id === appId);
    if (!this.app) {
      return console.warn(`App ${appId} not found`);
    }
    this.shadow.querySelector('#app').innerHTML = `
      <${this.app.tag}></${this.app.tag}>
    `;
    this.classList.add('open');
    this.changeUrl(pushHistory);
  }

  closeApp(pushHistory) {
    if (!this.classList.contains('open')) return;
    this.app = null;
    this.classList.remove('open');
    this.shadow.querySelector('#app').innerHTML = '';
    this.changeUrl(pushHistory);
  }

  attributeChangedCallback(prop, oldValue, newValue) {
    if (prop === 'count') {
      this.render();
    }
  }

  render() {
    this.shadow.innerHTML = `
      <style>
        :host {
          display: none;
          position: fixed;
          top: 30px;
          left: 0;
          width: 100%;
          height: calc(100% - 30px);
          background-color: #fff;
        }
        :host(.open) {
          display: block;
        }
        :host #app, :host #app > * {
          width: 100%;
          height: 100%;
          display: block;
          box-sizing: border-box;
          background-color: var(--color-background);
        }
        :host #app > * {
          max-width: 100%;
          overflow-y: auto;
        }
        :host #close {
          all: unset;
          position: absolute;
          top: 1rem;
          right: 1rem;
          cursor: pointer;
          font-size: 1.5rem;
          background-color: var(--color-red-dark);
          color: var(--color-red-darker);
          border-radius: 200px;
          height: 1.5rem;
          width: 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1;
        }
      </style>
      <button id="close">×</button>
      <div id="app">
      </div>
    `;
  }
}

customElements.define('os-app-wrapper', appWrapper);
