class IconClock extends HTMLElement {
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
      <g clip-path="url(#clip0_211_4)">
      <path d="M16 0.5C7.4375 0.5 0.5 7.4375 0.5 16C0.5 24.5625 7.4375 31.5 16 31.5C24.5625 31.5 31.5 24.5625 31.5 16C31.5 7.4375 24.5625 0.5 16 0.5ZM19.5688 22.3813L14.0562 18.375C13.8625 18.2313 13.75 18.0062 13.75 17.7687V7.25C13.75 6.8375 14.0875 6.5 14.5 6.5H17.5C17.9125 6.5 18.25 6.8375 18.25 7.25V15.8562L22.2188 18.7437C22.5563 18.9875 22.625 19.4563 22.3813 19.7938L20.6187 22.2188C20.375 22.55 19.9063 22.625 19.5688 22.3813Z" fill="white"/>
      </g>
      <defs>
      <clipPath id="clip0_211_4">
      <rect width="32" height="32" fill="white"/>
      </clipPath>
      </defs>
      </svg>
    `;
  }
}

customElements.define('icon-clock', IconClock);
