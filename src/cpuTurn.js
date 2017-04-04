export function computerTurn(arr, symbol) {
  const user = symbol;
  const cpu = (user === "X" ? "O" : "X");
  const play = {};
  let field = arr;

  function availablePlays(board) {
    return board.filter((x) => {
      return (x !== "X" && x !== "O");
    })
  };

  function won(board, player) {
    if (
        (board[0] === player && board[1] === player && board[2] === player) ||
        (board[3] === player && board[4] === player && board[5] === player) ||
        (board[6] === player && board[7] === player && board[8] === player) ||
        (board[0] === player && board[3] === player && board[6] === player) ||
        (board[1] === player && board[4] === player && board[7] === player) ||
        (board[2] === player && board[5] === player && board[8] === player) ||
        (board[0] === player && board[4] === player && board[8] === player) ||
        (board[2] === player && board[4] === player && board[6] === player)
    ) {
      return true;
    } else {
      return false;
    }
  }

  //Based off of Ahmad Abdolsaheb's algorithm at https://medium.freecodecamp.com/how-to-make-your-tic-tac-toe-game-unbeatable-by-using-the-minimax-algorithm-9d690bad4b37#.qxm8fy7xj
  function miniMax(board, player) {
    const choices = availablePlays(board);
    const moves = [];

    //If a terminal state is reached, returns score representing the desirability of that state.
    if (won(board, user)) {
      return {
        score: -10
      };
    } else if (won(board, cpu)) {
      return {
        score: 10
      };
    } else if (choices.length === 0) {
      return {
        score: 0
      };
    };

    //Iterates through each available square and determines the score of the min-maxxed end state.
    for (let i = 0; i < choices.length; i++) {
      const move = {};
      move.index = board[choices[i]];
      board[choices[i]] = player;

      if (player === cpu) {
        const result = miniMax(board, user);
        move.score = result.score;
      } else {
        const result = miniMax(board, cpu);
        move.score = result.score;
      }

      board[choices[i]] = move.index;

      moves.push(move);
    };

    //determines best play based on most desirable end states.
    var bestChoice;
    if (player === cpu) {
      let bestChoiceScore = -10000;
      for (let x = 0; x < moves.length; x++) {
        if (moves[x].score > bestChoiceScore) {
          bestChoiceScore = moves[x].score;
          bestChoice = x;
        }
      }
    } else {
      let bestChoiceScore = 10000;
      for (let x = 0; x < moves.length; x++) {
        if (moves[x].score < bestChoiceScore) {
          bestChoiceScore = moves[x].score;
          bestChoice = x;
        }
      }
    };
    return moves[bestChoice];
  }

  //Returns an object containing the board after the computer move and information on whether or not this results in an end state.
  const result = miniMax(field, cpu);
  field[result.index] = cpu;
  play.field = field;
  play.userWins = won(field, user);
  play.cpuWins = won(field, cpu);
  play.tie = (availablePlays(field).length === 0 && !play.userWins && !play.cpuWins);
  return play;

}
