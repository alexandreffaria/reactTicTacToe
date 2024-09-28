import Board from "./Board";
import { useState } from "react";

export function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    let description;
    const isLatestMove = move === history.length - 1;
    if (move > 0) {
      description = "#" + move;
    } else {
      description = "Rdy";
    }
    return (
      <li key={move}>
        {isLatestMove ? (
          <p>Move # {move}</p>
        ) : (
          <button
            onClick={() => jumpTo(move)}
            style={{ backgroundColor: "goldenrod", borderRadius: "5px" }}
          >
            {description}
          </button>
        )}
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ul>{moves}</ul>
      </div>
    </div>
  );
}
