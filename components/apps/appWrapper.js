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
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: #fff;
        }
        :host(.open) {
          display: block;
        }
        :host #app, :host #app > * {
          width: 100%;
          height: 100%;
          display: block;
        }
      </style>
      <div id="app">
      </div>
    `;
  }
}

customElements.define('os-app-wrapper', appWrapper);
