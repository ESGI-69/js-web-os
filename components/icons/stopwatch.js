class IconStopwatch extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadow.innerHTML = `
      <style>
        :host {
          display: flex;
          align-items: center;
          justify-content: center;
          transform: scale(0.8);
        }
        :host svg path {
          fill: var(--color-text);
        }
      </style>
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M29 19C29 26.1813 23.1813 32 16 32C8.81875 32 3 26.1813 3 19C3 12.5 7.76875 7.1125 14 6.15625V4H12.25C11.8375 4 11.5 3.6625 11.5 3.25V0.75C11.5 0.3375 11.8375 0 12.25 0H19.75C20.1625 0 20.5 0.3375 20.5 0.75V3.25C20.5 3.6625 20.1625 4 19.75 4H18V6.15625C20.3438 6.51875 22.4813 7.50625 24.2313 8.94375L25.95 7.225C26.2438 6.93125 26.7188 6.93125 27.0125 7.225L28.7812 8.99375C29.075 9.2875 29.075 9.7625 28.7812 10.0562L26.9438 11.8938L26.9062 11.9312C28.2313 13.9562 29 16.3875 29 19ZM18 21.25V11.7812C18 11.3688 17.6625 11.0312 17.25 11.0312H14.75C14.3375 11.0312 14 11.3688 14 11.7812V21.25C14 21.6625 14.3375 22 14.75 22H17.25C17.6625 22 18 21.6625 18 21.25Z" fill="white"/>
      </svg>
    `;
  }
}

customElements.define('icon-stopwatch', IconStopwatch);
