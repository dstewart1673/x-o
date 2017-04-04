import React from 'react';
import Welcome from './Welcome';
import Game from './Game';
import { computerTurn } from './cpuTurn.js';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerSymbol: "",
      boardState: [0, 1, 2, 3, 4, 5, 6, 7, 8],
      playersTurn: true,
      firstTurn: true,
      endState: ""
    };
    this.startGame = this.startGame.bind(this);
    this.boxSelect = this.boxSelect.bind(this);
  }

  //When player has selected a symbol, this initializes the game board with the player as that symbol
  startGame(symbol) {
      this.setState({
        playerSymbol: symbol,
        boardState: [0, 1, 2, 3, 4, 5, 6, 7, 8],
        playersTurn: (symbol === "X" ? true : false),
        firstTurn: true
      })
    }
    //Takes computer's turn after players turn.
  componentDidUpdate() {
    if (this.state.playersTurn === false) {
      if (this.state.firstTurn) {
        if (this.state.playerSymbol === "O") {
          this.setState({
            boardState: ["X", 1, 2, 3, 4, 5, 6, 7, 8],
            firstTurn: false,
            playersTurn: true
          });
        } else {
          const board = this.state.boardState;
          if (board[4] === "X") {
            board[0] = "O";
          } else {
            board[4] = "O";
          }
          this.setState({
            boardState: board,
            firstTurn: false,
            playersTurn: true
          });
        }
      } else {
        const cpuBoard = computerTurn(this.state.boardState, this.state.playerSymbol);
        const end = (() => {
          if (cpuBoard.userWins) {
            return "User";
          } else if (cpuBoard.cpuWins) {
            return "CPU";
          } else if (cpuBoard.tie) {
            return "Tie";
          } else {
            return "";
          }
        })();
        this.setState({
          boardState: cpuBoard.field,
          playersTurn: true,
          endState: end
        });
      }
    }

  }

  //Tracks player's selected box
  boxSelect(i) {
    if (this.state.playersTurn && this.state.endState === "") {
      if (i === -1) {
        this.setState({
          playerSymbol: "",
          boardState: [0, 1, 2, 3, 4, 5, 6, 7, 8],
          playersTurn: true,
          firstTurn: true,
          endState: ""
        });
      } else {
        const board = this.state.boardState;
        board[i] = this.state.playerSymbol;
        this.setState({
          boardState: board,
          playersTurn: false
        });
      };
    } else if (i === -1) {
      this.setState({
        playerSymbol: "",
        boardState: [0, 1, 2, 3, 4, 5, 6, 7, 8],
        playersTurn: true,
        firstTurn: true,
        endState: ""
      });
    };
  }


  render() {
    const playerSymbol = this.state.playerSymbol;
    const ele = (playerSymbol === "" ? <Welcome handleClick={this.startGame} /> : <Game handleClick={this.boxSelect} board={this.state.boardState} endGame={this.state.endState} />);
    return (
      <div>
        {ele}
      </div>
    );
  }
};

export default App;
