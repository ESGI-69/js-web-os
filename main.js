import './assets/scss/app.scss';
import './components/dock';
import './components/topbar';
import './components/appIcon';
import './components/homeSceen';
import './components/apps/appWrapper';
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

import backgroundImage from './assets/images/background.jpg';
import {
  findSetting,
  getSettingValue,
} from './helpers/settingsHelper';

const app = document.querySelector('body');
app.style.backgroundImage = `url(${backgroundImage})`;

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

// Set theme on load
setTheme(getSettingValue(findSetting('os-theme')));
