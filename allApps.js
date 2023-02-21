import calculatorIcon from './assets/images/app-icons/calculator.png';
import clockIcon from './assets/images/app-icons/clock.png';
import messagesIcon from './assets/images/app-icons/messages.png';
import settingsIcon from './assets/images/app-icons/settings.png';
import tictactoeIcon from './assets/images/app-icons/tictactoe.png';

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
    icon: settingsIcon,
    id: 'settings',
    tag: 'os-app-settings',
  },
  {
    name: 'Tic Tac Toe',
    icon: tictactoeIcon,
    id: 'tictactoe',
    tag: 'os-app-tictactoe',
    isInDock: true,
  },
  {
    name: 'Clock',
    icon: clockIcon,
    id: 'os-app-clock',
    tag: 'os-app-clock',
    isInDock: true,
    tabs: [
      {
        name: 'Clock',
        icon: 'icon-clock',
        id: 'os-tab-clock',
        tag: 'os-tab-clock',
      },
      {
        name: 'Stopwatch',
        icon: 'icon-stopwatch',
        id: 'os-tab-stopwatch',
        tag: 'os-tab-stopwatch',
      },
      {
        name: 'Timer',
        icon: 'icon-hourglass',
        id: 'os-tab-timer',
        tag: 'os-tab-timer',
      },
    ],
    defaultTab: 'os-tab-clock',
  },
];
