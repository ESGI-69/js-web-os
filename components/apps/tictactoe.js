class appTictactoe extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
    this.player = 'X';
    this.computer = 'O';
    this.board = ['', '', '', '', '', '', '', '', ''];
    this.scores = {
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

        :host .board {
          // display: flex;
          // flex-wrap: wrap;
          // justify-content: center;
          // margin-top: 20px;
          width: 600px;
          height: 600px;
          margin: 0 auto;
          background-color: #34495e;
          color: #fff;
          border: 6px solid #2c3e50;
          border-radius: 10px;
          
          display: grid;
          grid-template: repeat(3, 1fr) / repeat(3, 1fr);
        }

        :host .board div {
          // width: 60px;
          // height: 60px;
          // border: 1px solid black;
          // display: flex;
          // align-items: center;
          // justify-content: center;
          // font-size: 2rem;
          // cursor: pointer;
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

        :host .reset {
          margin-top: 20px;
          cursor: pointer;
        }

      </style>

      <div class="main">
        <div class="choose-symbol">
          <p>Choose your symbol:</p>
          <button id="x-button">X</button>
          <button id="o-button">O</button>
        </div>
        <div class="board"></div>
        <div class="scores">
          <p>Player: ${this.scores.player}</p>
          <p>Computer: ${this.scores.computer}</p>
          <p>Draw: ${this.scores.draw}</p>
        </div>
        <div class="reset">Reset</div>
      </div>
    `;
    this.boardDiv = this.shadow.querySelector('.board');
    this.resetDiv = this.shadow.querySelector('.reset');
    this.xButton = this.shadow.querySelector('#x-button');
    this.oButton = this.shadow.querySelector('#o-button');
    this.xButton.addEventListener('click', () => {
      this.player = 'X';
      this.computer = 'O';
      this.startNewGame();
    });
    this.oButton.addEventListener('click', () => {
      this.player = 'O';
      this.computer = 'X';
      this.startNewGame();
    });
    this.resetDiv.addEventListener('click', () => {
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
          alert('You win!');
        } else {
          this.scores.computer++;
          alert('You lose!');
        }
        this.render();
        return;
      }
    }
    if (this.board.filter((x) => x === '').length === 0) {
      this.gameOver = true;
      this.scores.draw++;
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
}

customElements.define('os-app-tictactoe', appTictactoe);
