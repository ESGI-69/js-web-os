import calculatorIcon from './assets/images/app-icons/calculator.png';
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
  }
];
