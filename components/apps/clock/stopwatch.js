class TabStopwatch extends HTMLElement {
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
          display: grid !important;
          grid-template-columns: 1fr;
          grid-template-rows: 1fr 5rem;
          background: var(--color-background);
        }
      </style>
      <div class="clock">
        <div class="clock__time">Stopwatch</div>
        <div class="clock__date">00:00:00</div>
      </div>
    `;
  };
}

customElements.define('os-tab-stopwatch', TabStopwatch);
