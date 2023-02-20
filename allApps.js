import calculatorIcon from './assets/images/app-icons/calculator.png';
import messagesIcon from './assets/images/app-icons/messages.png';

export default [
  {
    name: 'Calculator',
    icon: calculatorIcon,
    id: 'calculator',
    tag: 'os-app-calculator',
    isInDock: true,
  },
  {
    name: 'Messages',
    icon: messagesIcon,
    id: 'messages',
    tag: 'os-app-message',
    isInDock: true,
  },
  {
    name: 'Settings',
    icon: 'https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-gear-512.png',
    id: 'settings',
    tag: 'os-app-settings',
    isInDock: true,
  },
];
