class BoltIcon extends HTMLElement {
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
        <path d="M12.25 5H8.64378L9.97503 0.94375C10.1 0.46875 9.74065 0 9.25003 0H4.75003C4.37503 0 4.05628 0.278125 4.00628 0.65L3.00628 8.15C2.9469 8.6 3.2969 9 3.75003 9H7.4594L6.01878 15.0781C5.90628 15.5531 6.26878 16 6.7469 16C7.0094 16 7.2594 15.8625 7.3969 15.625L12.8969 6.125C13.1875 5.62813 12.8282 5 12.25 5Z" fill="white"/>
      </svg>
    `;
  }
}

customElements.define('icon-bolt', BoltIcon);
