# js-web-os

## Fonctionnalités :
- Applcations:
  - Calculatrice

- API, Constructeurs et Interfaces:
  - Vibration API
  - Battery Status API
  - Device orientation events
  - Notification API
  - Custom Elements
  - Custom Event
  - Mutation Observer
  - Local Storage
  - URL
  - File Reader

## Developpement :

### Comment Créer une nouvelle application :

- Créer un dossier dans le fichier `components/apps` avec le nom de votre application avec le contenu suivant :

  ```js
  // Etend la classe HTMLElement
  class appExample extends HTMLElement {
    constructor() {
      // Appel du constructeur de la classe parente
      super();
      // Création d'un shadow DOM
      this.shadow = this.attachShadow({ mode: 'open' });
    }

    // Appelé lorsque l'élément est inséré dans le DOM
    connectedCallback() {
      // Appel de la fonction de rendu avant d'ajouter l'écouteur d'événement
      this.render();
    }

    render() {
      this.shadow.innerHTML = `
        <style>
          :host {
            display: block;
            background-color: blue;
          }
        </style>
        <span>Example</span>
        <span>Example text</span>
      `;
    }
  }

  customElements.define('os-app-example', appExample);
  ```

- Ajouter le nom de votre application dans le fichier `main.js` :

  ```js
  import './components/apps/exmaple';
  ```

- Ajouter les info de votre application dans le fichier `allApps.js` :

  ```js
  import exampleIcon from './assets/images/app-icons/example.png';

  ...

  {
    // Nom de l'application qui s'affichera si l'app n'est pas dans le dock
    name: 'Example',
    // Icone de l'application
    icon: exampleIcon,
    // Id de l'application
    id: 'example',
    // html tag de l'application
    tag: 'os-app-exmaple',
    // Si l'application doit s'afficher dans le dock
    isInDock: true,
  },
  ```

  **A noter:**
  - Le `tag` de l'application doit être le même que celui défini dans le fichier `components/apps/example.js` dans la fonction `customElements.define('os-app-example', appExample);`

## Installation :

```sh
npm install
```

```sh
npm run dev
```

## Production :

Link : [https://esgi-69.github.io/js-web-os/](https://esgi-69.github.io/js-web-os/)