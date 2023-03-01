import './assets/scss/app.scss';
import './components/dock';
import './components/topbar';
import './components/appIcon';
import './components/homeScreen';
import './components/lockScreen';
import './components/apps/appWrapper';
import './components/apps/clock';
import './components/apps/clock/main';
import './components/apps/clock/stopwatch';
import './components/apps/clock/timer';
import './components/apps/calulator';
import './components/apps/message';
import './components/apps/settings';
import './components/apps/tictactoe';
import './components/app';
import './components/icons/bolt';
import './components/icons/bell';
import './components/icons/bellSlash';
import './components/icons/batteryThreeQuarters';
import './components/icons/batteryHalf';
import './components/icons/batteryFull';
import './helpers/backgroundAnimation';
import './components/icons/clock';
import './components/icons/stopwatch';
import './components/icons/hourglass';

import {
  findSetting,
  getSettingValue,
} from './helpers/settingsHelper';

// Handle theme change
document.addEventListener('changeSetting', (event) => {
  if (event.detail.setting === 'os-theme') {
    setTheme(event.detail.value);
  }
});

const setTheme = (theme) => {
  if (theme === 'light') {
    document.body.style.setProperty('--color-background', '#f6f6f6');
    document.body.style.setProperty('--color-background-light', '#e6e6e6');
    document.body.style.setProperty('--color-background-lighter', '#d6d6d6');
    document.body.style.setProperty('--color-text', '#0B0B0B');
    document.body.style.setProperty('--color-red-dark', '#ff6b6b');
    document.body.style.setProperty('--color-red-darker', '#F9CACA');
    document.body.style.setProperty('--color-topbar-background', 'rgba(255, 255, 255, 0.6)');
    document.body.style.setProperty('--color-dock-background', 'rgba(255, 255, 255, 0.2)');
  } else {
    document.body.style.setProperty('--color-background', '#222222');
    document.body.style.setProperty('--color-background-light', '#333333');
    document.body.style.setProperty('--color-background-lighter', '#444444');
    document.body.style.setProperty('--color-text', '#f6f6f6');
    document.body.style.setProperty('--color-red-dark', '#8B0000');
    document.body.style.setProperty('--color-red-darker', '#580000');
    document.body.style.setProperty('--color-topbar-background', 'rgba(0, 0, 0, 0.6)');
    document.body.style.setProperty('--color-dock-background', 'rgba(0, 0, 0, 0.2)');
  }
};

if ('Notification' in window) {
  const permission = await Notification.requestPermission();
}

// Set theme on load
setTheme(getSettingValue(findSetting('os-theme')));

const openApp = (appId) => {
  document.dispatchEvent(new CustomEvent('open-app', { detail: {id: appId, pushHistory: false} })); 
};

const closeApp = () => {
  document.dispatchEvent(new CustomEvent('close-app', { detail: { pushHistory: false }}));
};

// Load app if url contains app
const appId = window.location.hash.slice(1);
if (appId) {
  openApp(appId);
}

// Detect the hash change
window.addEventListener('hashchange', (event) => {
  if (event.currentTarget.location.hash) {
    openApp(event.currentTarget.location.hash.slice(1));
  } else {
    closeApp();
  }
});
