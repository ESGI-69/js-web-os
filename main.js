// The ?raw makes vite import the value as string
import notificationComponent from './components/notification.html?raw';
import './assets/scss/style.scss';

const sendNotification = (timeout = 5000) => {
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

// Notificaiton button event
const notificationButton = window.document.querySelector('#notification-button');
notificationButton.addEventListener('click', sendNotification);
