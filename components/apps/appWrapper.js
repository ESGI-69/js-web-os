import allApps from '../../allApps';

class appWrapper extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
    document.addEventListener('open-app', ({ detail }) => {
      const app = allApps.find((app) => app.id === detail.id);
      this.openApp(app);
    });

    this.shadow.querySelector('#close').addEventListener('click', () => {
      this.closeApp();
    });

    document.addEventListener('close-app', () => {
      this.closeApp();
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

  openApp(app) {
    this.shadow.querySelector('#app').innerHTML = `
      <${app.tag}></${app.tag}>
    `;
    this.classList.add('open');
  }

  closeApp() {
    this.classList.remove('open');
    this.shadow.querySelector('#app').innerHTML = '';
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
