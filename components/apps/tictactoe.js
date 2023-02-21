import {
  findSetting,
  getSettingValue,
} from '../../helpers/settingsHelper';

class appTictactoe extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
    this.player = 'X';
    this.computer = 'O';
    this.board = ['', '', '', '', '', '', '', '', ''];
    this.scores = JSON.parse(localStorage.getItem('tictactoe-scores')) || {
      player: 0,
      computer: 0,
      draw: 0
    };
    this.gameOver = false;
    this.render();
  }

  render() {
    this.shadow.innerHTML = `
      <style>
        :host body {
          font-family: Lato, sans-serif;
        }

        :host .main {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 20px;
        }

        :host h1 {
          font-family: 'Pacifico',serif;
          text-align: center;
          margin: 0;
        }

        :host .overlay {
          position: fixed;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          background: rgba(0, 0, 0, 0.7);
          transition: opacity 500ms;
          // visibility: hidden;
          // opacity: 0;
        }

        :host .choose-symbol {
          margin: 50% auto;
          padding: 20px;
          background: #fff;
          border-radius: 5px;
          width: 70%;
          position: relative;
          transition: all 0.5s ease-in-out;
        }

        :host .text-side {
          font-family: 'Pacifico',serif;
          font-size: 18px;
          text-align: center;
        }

        :host .buttons {
          display: flex;
          flex-direction: row;
          justify-content: center;
        }

        :host .buttons button {
          padding: 16px 32px;
          margin: 16px 32px;
          border: 6px solid #2c3e50;
          border-radius: 10px;
          background-color: #34495e;
          color: white;
          font-weight: bold;
          cursor: pointer;
        }

        :host .board {
          width: 80%;
          aspect-ratio : 1 / 1;
          margin: 0 auto;
          background-color: #34495e;
          color: #fff;
          border: 6px solid #2c3e50;
          border-radius: 10px;
          
          display: grid;
          grid-template: repeat(3, 1fr) / repeat(3, 1fr);
        }

        :host .board div {
          border: 6px solid #2c3e50;
          border-radius: 2px;
          font-family: Helvetica;
          font-weight: bold;
          font-size: 4em;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        :host .scores {
          display: flex;
          justify-content: space-between;
          margin-top: 20px;
        }

        :host .scores p {
          padding: 0 4px;
        }

        :host .reset {
          margin-top: 20px;
          cursor: pointer;
          border: 6px solid #dc2626;
          border-radius: 10px;
          background-color: #ef4444;
          color: white;
          padding: 16px 32px;
        }

      </style>

      <div class="main">
        <h1>Tic Tac Toe</h1>
        <div class="overlay">
          <div class="choose-symbol">
            <p class="text-side">Choose your side</p>
            <div class="buttons">
              <button id="x-button">X</button>
              <button id="o-button">O</button>
            </div>
          </div>
        </div>
        <div class="board"></div>
        <div class="scores">
          <p>Player: ${this.scores.player}</p>
          <p> Computer: ${this.scores.computer}</p>
          <p> Draw: ${this.scores.draw}</p>
        </div>
        <div class="reset">Reset current game</div>
      </div>
    `;
    this.boardDiv = this.shadow.querySelector('.board');
    this.resetDiv = this.shadow.querySelector('.reset');
    this.xButton = this.shadow.querySelector('#x-button');
    this.oButton = this.shadow.querySelector('#o-button');
    this.xButton.addEventListener('click', () => {
      this.shadow.querySelector('.overlay').style.visibility = 'hidden';
      this.shadow.querySelector('.overlay').style.opacity = '0';
      this.player = 'X';
      this.computer = 'O';
      this.startNewGame();
    });
    this.oButton.addEventListener('click', () => {
      this.shadow.querySelector('.overlay').style.visibility = 'hidden';
      this.shadow.querySelector('.overlay').style.opacity = '0';
      this.player = 'O';
      this.computer = 'X';
      this.startNewGame();
    });
    this.resetDiv.addEventListener('click', () => {
      this.shadow.querySelector('.overlay').style.visibility = 'inherit';
      this.shadow.querySelector('.overlay').style.opacity = '1';
      this.startNewGame();
    });
  }

  startNewGame() {
    this.board = ['', '', '', '', '', '', '', '', ''];
    this.gameOver = false;
    this.renderBoard();
  }

  renderBoard() {
    let html = '';
    for (let i = 0; i < this.board.length; i++) {
      html += `<div data-index="${i}">${this.board[i]}</div>`;
      if ((i + 1) % 3 === 0) {
        html;
      }
    }
    this.boardDiv.innerHTML = html;
    const boardDivs = this.shadow.querySelectorAll('.board div');
    boardDivs.forEach((div) => {
      div.addEventListener('click', () => {
        if (div.innerText === '' && !this.gameOver) {
          this.makeMove(div.dataset.index, this.player);
          if (!this.gameOver) {
            this.computerMove();
          }
        }
      });
    });
  }
  makeMove(index, symbol) {
    this.vibrate();
    this.board[index] = symbol;
    this.renderBoard();
    const winningLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < winningLines.length; i++) {
      const [a, b, c] = winningLines[i];
      if (this.board[a] && this.board[a] === this.board[b] && this.board[a] === this.board[c]) {
        this.gameOver = true;
        if (this.board[a] === this.player) {
          this.scores.player++;
          localStorage.setItem('tictactoe-scores', JSON.stringify(this.scores));
          alert('You win!');
        } else {
          this.scores.computer++;
          localStorage.setItem('tictactoe-scores', JSON.stringify(this.scores));
          alert('You lose!');
        }
        this.render();
        return;
      }
    }
    if (this.board.filter((x) => x === '').length === 0) {
      this.gameOver = true;
      this.scores.draw++;
      localStorage.setItem('scores', JSON.stringify(this.scores));
      alert('Draw!');
      this.render();
    }
  }

  computerMove() {
    const emptyIndices = [];
    for (let i = 0; i < this.board.length; i++) {
      if (this.board[i] === '') {
        emptyIndices.push(i);
      }
    }
    const randomIndex = emptyIndices[Math.floor(Math.random() * emptyIndices.length)];
    this.makeMove(randomIndex, this.computer);
  }

  vibrate() {
    if (navigator.vibrate) {
      const vibrationDuration = getSettingValue(findSetting('os-vibration-duration'));
      if (getSettingValue(findSetting('os-vibration'))) {
        navigator.vibrate(vibrationDuration);
      }
    } else {
      console.log('vibration not supported');
    }
  }
}

customElements.define('os-app-tictactoe', appTictactoe);
