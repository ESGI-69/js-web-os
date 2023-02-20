import './assets/scss/app.scss';
import './components/dock';
import './components/topbar';
import './components/appIcon';
import './components/apps/appWrapper';
import './components/apps/calulator';
import './components/apps/message';
import './components/apps/settings';
import './components/app';

import backgroundImage from './assets/images/background.jpg';

const app = document.querySelector('body');
app.style.backgroundImage = `url(${backgroundImage})`;
