class IconHourglass extends HTMLElement {
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
        <path d="M26.5 0H5.5C4.67156 0 4 0.671562 4 1.5V2.5C4 3.32844 4.67156 4 5.5 4C5.5 9.68531 8.6885 14.4834 13.0526 16C8.6885 17.5166 5.5 22.3147 5.5 28C4.67156 28 4 28.6716 4 29.5V30.5C4 31.3284 4.67156 32 5.5 32H26.5C27.3284 32 28 31.3284 28 30.5V29.5C28 28.6716 27.3284 28 26.5 28C26.5 22.3147 23.3115 17.5166 18.9474 16C23.3115 14.4834 26.5 9.68531 26.5 4C27.3284 4 28 3.32844 28 2.5V1.5C28 0.671562 27.3284 0 26.5 0ZM21.8076 24H10.1925C11.2587 21.0752 13.4485 19 16 19C18.5513 19 20.7414 21.0747 21.8076 24ZM21.8088 8H10.1924C9.74925 6.78425 9.5 5.42175 9.5 4H22.5C22.5 5.42531 22.2508 6.78669 21.8088 8Z" fill="white"/>
      </svg>
    `;
  }
}

customElements.define('icon-hourglass', IconHourglass);
