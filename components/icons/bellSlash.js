class BellSlashIcon extends HTMLElement {
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
        <path d="M15.8455 13.0525L13.58 11.3012C13.5847 11.2667 13.6 11.2347 13.6 11.1997C13.6012 11.011 13.5347 10.818 13.3847 10.657C12.9017 10.138 11.998 9.35725 11.998 6.79975C11.998 4.85725 10.636 3.30225 8.79948 2.92075V2.4C8.79948 1.95825 8.44148 1.6 7.99998 1.6C7.55848 1.6 7.20048 1.95825 7.20048 2.4V2.921C6.19223 3.1305 5.33398 3.69775 4.76073 4.48525L1.13673 1.68425C0.962228 1.54875 0.710728 1.58 0.575228 1.7545L0.0842278 2.38625C-0.0512722 2.5605 -0.0200222 2.81175 0.154478 2.9475L14.8632 14.3157C15.0377 14.4515 15.289 14.42 15.4247 14.2455L15.9157 13.6137C16.0512 13.4395 16.02 13.1882 15.8455 13.0525ZM3.93073 7.8885C3.71548 9.5875 3.02048 10.2217 2.61523 10.6572C2.46523 10.8185 2.39873 11.0112 2.39998 11.2C2.40273 11.61 2.72448 12 3.20248 12H9.25048L3.93073 7.8885ZM7.99998 14.4C8.88298 14.4 9.59923 13.6837 9.59923 12.8H6.40073C6.40073 13.6837 7.11698 14.4 7.99998 14.4Z" fill="white"/>
      </svg>
    `;
  }
}

customElements.define('icon-bell-slash', BellSlashIcon);
