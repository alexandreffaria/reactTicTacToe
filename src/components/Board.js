import { Square } from "./Square";
import { calculateWinner } from "./calculateWinner";
import "../styles.css";

export default function Board({ xIsNext, squares, onPlay }) {
  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "✖️";
    } else {
      nextSquares[i] = "🟠";
    }
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "ggwp: " + winner;
  } else {
    status = "Next: " + (xIsNext ? "✖️" : "🟠");
  }

  const renderSquare = (i) => (
    <Square key={i} value={squares[i]} onSquareClick={() => handleClick(i)} />
  );

  const createBoard = () => {
    let board = [];
    for (let row = 0; row < 3; row++) {
      let boardRow = [];
      for (let col = 0; col < 3; col++) {
        boardRow.push(renderSquare(row * 3 + col));
      }
      board.push(
        <div key={row} className="board-row">
          {boardRow}
        </div>
      );
    }
    return board;
  };

  return (
    <>
      <div className="status">{status}</div>
      {createBoard()}
    </>
  );
}
