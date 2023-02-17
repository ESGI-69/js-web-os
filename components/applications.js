import Application from "./application";

const applications = [
  {
    name: 'Gmail',
    icon: 'https://www.gstatic.com/images/branding/product/1x/gmail_2020q4_48dp.png',
    url: 'https://mail.google.com/mail/u/0/#inbox',
  },
  {
    name: 'Youtube',
    icon: 'https://www.gstatic.com/images/branding/product/1x/youtube_48dp.png',
    url: 'https://www.youtube.com/',
  },
];

export default class Applications {
  constructor() {
    this.element = null;
  }

  renderHTML() {
    return `
      <ul class="applications">${applications.map(({ name, icon, url }) => {
      return new Application(name, icon, url).renderHTML();
    }).join('')}</ul>
  `;
  }

  render(parentElement, position = 'beforeend') {
    this.element = parentElement.insertAdjacentHTML(position, this.renderHTML());
  }
}