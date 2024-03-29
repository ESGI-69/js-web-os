class BellIcon extends HTMLElement {
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
        }
        :host svg path {
          fill: var(--color-text);
        }
      </style>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.00002 16C9.10377 16 9.99908 15.1047 9.99908 14H6.00096C6.00096 15.1047 6.89627 16 8.00002 16ZM14.731 11.3216C14.1272 10.6728 12.9975 9.69688 12.9975 6.5C12.9975 4.07188 11.295 2.12813 8.9994 1.65125V1C8.9994 0.447812 8.5519 0 8.00002 0C7.44815 0 7.00065 0.447812 7.00065 1V1.65125C4.70502 2.12813 3.00252 4.07188 3.00252 6.5C3.00252 9.69688 1.87283 10.6728 1.26908 11.3216C1.08158 11.5231 0.998459 11.7641 1.00002 12C1.00346 12.5125 1.40565 13 2.00315 13H13.9969C14.5944 13 14.9969 12.5125 15 12C15.0016 11.7641 14.9185 11.5228 14.731 11.3216Z" fill="white"/>
      </svg>
    `;
  }
}

customElements.define('icon-bell', BellIcon);
