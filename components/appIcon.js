class Application extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  static get observedAttributes() {
    return ['name', 'icon', 'show-name'];
  }

  get name() {
    return this.getAttribute('name');
  }

  set name(value) {
    this.setAttribute('name', value);
  }

  get icon() {
    return this.getAttribute('icon');
  }

  set icon(value) {
    this.setAttribute('icon', value);
  }

  get showName() {
    return typeof this.getAttribute('show-name') === 'string';
  }

  set showName(value) {
    this.setAttribute('show-name', value);
  }

  render() {
    this.shadow.innerHTML =`
      <style>
        :host {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          align-items: center;
        }
        :host img {
          width: 50px;
          height: 50px;
          border-radius: 0.5rem;
        }
        :host > span {
          font-size: 0.8rem;
        }
      </style>
      <img src="${this.icon}" alt="${this.name}" />
      ${this.showName
        ? `<span>${this.name}</span>`
        : ''
      }
    `;
  }
}

customElements.define('os-app-icon', Application);
