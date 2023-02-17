export default class Notification {
  constructor(title, content, image, timeout) {
    this.title = title;
    this.content = content;
    this.image = image;
    this.timeout = timeout;
    this.element = null;
  }

  renderHTML() {
    return `
      <div class="notification">
        <img class="notification__image" src="${this.image}">
        <span class="notification__title">${this.title}</span>
        <span class="notification__content">${this.content}</span>
      </div>
    `;
  }

  create(parentElement) {
    this.element = parentElement.insertAdjacentHTML('beforeend', this.renderHTML());
  }

  showNotification(timeout = 5000) {
    if (typeof timeout !== 'number') timeout = 5000;
    const body = window.document.body;
    body.insertAdjacentHTML('beforeend', notificationComponent);
    const notificationElement = window.document.querySelector('.notification');
    notificationElement.classList.add('notification--show-animation');
    // Lauch the animation and show the notification
    setTimeout(() => {
      notificationElement.classList.remove('notification--show-animation')
      notificationElement.classList.add('notification--show');
      // Hide the notification after timeout (default 5s)
      setTimeout(() => {
        notificationElement.classList.add('notification--hide-animation');
        // Remove the notification after the animation
        setTimeout(() => {
          notificationElement.remove();
        }, 300);
      }, timeout);
    }, 300);
  };
}