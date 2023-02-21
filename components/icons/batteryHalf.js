class BatteryHalfIcon extends HTMLElement {
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
        :host svg path {
          fill: var(--color-text);
        }
      </style>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.6 5.6V7.2H14.4V8.8H13.6V10.4H1.6V5.6H13.6ZM14 4H1.2C0.53725 4 0 4.53725 0 5.2V10.8C0 11.4628 0.53725 12 1.2 12H14C14.6628 12 15.2 11.4628 15.2 10.8V10.4H15.4C15.7314 10.4 16 10.1314 16 9.8V6.2C16 5.86863 15.7314 5.6 15.4 5.6H15.2V5.2C15.2 4.53725 14.6628 4 14 4ZM8 6.4H2.4V9.6H8V6.4Z" fill="white"/>
      </svg>
    `;
  }
}

customElements.define('icon-battery-half', BatteryHalfIcon);
