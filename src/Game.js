import React from 'react';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(x) {
    this.props.handleClick(x);
  }

  render() {
      const board = this.props.board;
      const endState = ((prop) => {
        if (prop === "") {
          return <h2>Game On!</h2>;
        } else if (prop === "User") {
          return <h2>You win! </h2>;
        } else if (prop === "CPU") {
          return <h2>I win! </h2>;
        } else {
          return <h2>It&#39;s a draw! </h2>;
        }
      })(this.props.endGame);
      return (
        <div className="container-fluid">
          <div className="row board-row">
            <div className="col-xs-2 board-cell">
              {board[0] === 0 ? (
                <button className="btn btn--box btn-none" onClick={() => this.handleClick(0)}> </button>
              ) : (
                <button className={"btn btn--box " + (board[0] === "X" ? "btn-player" : "btn-cpu")}>{board[0]}</button>
              )}
            </div>
            <div className="col-xs-2 board-cell">
              {board[1] === 1 ? (
                <button className="btn btn--box btn-none" onClick={() => this.handleClick(1)}> </button>
              ) : (
                <button className={"btn btn--box " + (board[1] === "X" ? "btn-player" : "btn-cpu")}>{board[1]}</button>
              )}
            </div>
            <div className="col-xs-2 board-cell">
              {board[2] === 2 ? (
                <button className="btn btn--box btn-none" onClick={() => this.handleClick(2)}> </button>
              ) : (
                <button className={"btn btn--box " + (board[2] === "X" ? "btn-player" : "btn-cpu")}>{board[2]}</button>
              )}
            </div>
          </div>
          <div className="row board-row">
            <div className="col-xs-2 board-cell">
              {board[3] === 3 ? (
                <button className="btn btn--box btn-none" onClick={() => this.handleClick(3)}> </button>
              ) : (
                <button className={"btn btn--box " + (board[3] === "X" ? "btn-player" : "btn-cpu")}>{board[3]}</button>
              )}
            </div>
            <div className="col-xs-2 board-cell">
              {board[4] === 4 ? (
                <button className="btn btn--box btn-none" onClick={() => this.handleClick(4)}> </button>
              ) : (
                <button className={"btn btn--box " + (board[4] === "X" ? "btn-player" : "btn-cpu")}>{board[4]}</button>
              )}
            </div>
            <div className="col-xs-2 board-cell">
              {board[5] === 5 ? (
                <button className="btn btn--box btn-none" onClick={() => this.handleClick(5)}> </button>
              ) : (
                <button className={"btn btn--box " + (board[5] === "X" ? "btn-player" : "btn-cpu")}>{board[5]}</button>
              )}
            </div>
          </div>
          <div className="row board-row">
            <div className="col-xs-2 board-cell">
              {board[6] === 6 ? (
                <button className="btn btn--box btn-none" onClick={() => this.handleClick(6)}> </button>
              ) : (
                <button className={"btn btn--box " + (board[6] === "X" ? "btn-player" : "btn-cpu")}>{board[6]}</button>
              )}
            </div>
            <div className="col-xs-2 board-cell">
              {board[7] === 7 ? (
                <button className="btn btn--box btn-none" onClick={() => this.handleClick(7)}> </button>
              ) : (
                <button className={"btn btn--box " + (board[7] === "X" ? "btn-player" : "btn-cpu")}>{board[7]}</button>
              )}
            </div>
            <div className="col-xs-2 board-cell">
              {board[8] === 8 ? (
                <button className="btn btn--box btn-none" onClick={() => this.handleClick(8)}> </button>
              ) : (
                <button className={"btn btn--box " + (board[8] === "X" ? "btn-player" : "btn-cpu")}>{board[8]}</button>
              )}
            </div>
          </div>
          <div className="row board-row result">
            <p>{endState}</p>
          </div>
          <div className="row board-cell">
            <button className="btn btn-danger" onClick={() => this.handleClick(-1)}>Try Again!</button>
          </div>
          <div className="byline">
            <p>A FreeCodeCamp project by Daniel Stewart!</p>
          </div>
        </div>
      );
  }
}

export default Game;
