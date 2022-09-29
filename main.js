// The ?raw makes vite import the value as string
import screenComponent from './components/lockscreen.html?raw';
import notificationComponent from './components/notification.html?raw';
import './assets/scss/style.scss';

const screenLockToogle = () => {
  let screenElement = window.document.querySelector('.iphone__screen');
  console.log('screenElement', screenElement);
  if (screenElement) {
    // Si il est unlock au moment de l'appel de la fonction
    screenElement = window.document.querySelector('.iphone__screen');
    screenElement.classList.add('iphone__screen--locked');
    setTimeout(() => {
      screenElement.remove();
      lockScreenButton.innerHTML = 'Unlock';
    }, 300);
  } else {
    // Si il est lock au moment de l'appel de la fonction
    phoneElement.insertAdjacentHTML('beforeend', screenComponent);
    screenElement = window.document.querySelector('.iphone__screen');
    screenElement.classList.add('iphone__screen--locked');
    setTimeout(() => {
      screenElement.classList.remove('iphone__screen--locked');
      lockScreenButton.innerHTML = 'Lock';
    }, 300);
  }
}

const vibrate = (duration = 300) => {
  phoneElement.classList.add('iphone--vibrate');
  setTimeout(() => {
    phoneElement.classList.remove('iphone--vibrate');
  }, duration);
};

const sendNotification = () => {
  const screenElement = window.document.querySelector('.iphone__screen');
  if (!screenElement) return;
  screenElement.insertAdjacentHTML('beforeend', notificationComponent);
  const notificationElement = window.document.querySelector('.notification');
  notificationElement.classList.add('notification--show-animation');
  setTimeout(() => {
    notificationElement.classList.remove('notification--show-animation')
    notificationElement.classList.add('notification--show');
  }, 300);
};

const phoneElement = window.document.querySelector('.iphone');
let screenElement = window.document.querySelector('.iphone__screen');

// Screen lock button event
const lockScreenButton = window.document.querySelector('#screen-lock');
lockScreenButton.addEventListener('click', screenLockToogle);

// Notificaiton button event
const notificationButton = window.document.querySelector('#notification-button');
notificationButton.addEventListener('click', sendNotification);
