import { useState } from "react";
import Modal from "./Modal";

let board = [
  ["-", "-", "-"],
  ["-", "-", "-"],
  ["-", "-", "-"],
];

function App() {
  const [turn, setTurn] = useState("X");
  const [winner, setWinner] = useState("");
  const [gameOver, setGameOver] = useState(false);
  const [draw, setDraw] = useState(false);

  const handleClick = (e) => {
    if (e.target.innerText) return;

    e.target.innerText = turn;

    fillBoard(e);

    checkDraw();

    checkWin();

    turn === "X" ? setTurn("O") : setTurn("X");

    return;
  };

  const handleRestart = () => {
    window.location.reload(false);
  };

  const checkDraw = () => {
    let counter = 0;

    board.forEach((row) => {
      const result = row.every((value) => value === "X" || value === "O");
      if (result) {
        counter++;
        if (counter === 3) {
          setDraw(true);
          gameOver(true);
        }
      }
    });
  };

  const checkWin = () => {
    //Checks rows
    for (let i = 0; i < 3; i++) {
      if (
        board[i][0] === turn &&
        board[i][1] === turn &&
        board[i][2] === turn
      ) {
        setWinner(turn);
        setGameOver(true);
        return;
      }
    }

    //Checks cols
    for (let i = 0; i < 3; i++) {
      if (
        board[0][i] === turn &&
        board[1][i] === turn &&
        board[2][i] === turn
      ) {
        setWinner(turn);
        setGameOver(true);
        return;
      }
    }

    //Checks diag
    for (let i = 0; i < 3; i++) {
      if (
        (board[0][0] === turn &&
          board[1][1] === turn &&
          board[2][2] === turn) ||
        (board[0][2] === turn && board[1][1] === turn && board[2][0] === turn)
      ) {
        setWinner(turn);
        setGameOver(true);
        return;
      }
    }
  };

  const fillBoard = (e) => {
    const idRow = parseInt(e.target.dataset.idrow);
    const idCol = parseInt(e.target.dataset.idcol);

    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[i][j] === "-" && i === idRow && j === idCol) {
          board[idRow][idCol] = turn;
          return;
        }
      }
    }
  };

  return (
    <>
      <main>
        <h1 className="text-6xl font-bold text-indigo-600 text-center mt-10">
          Tic Tac Toe
        </h1>
        <div className="flex">
          <section className=" grid grid-cols-3 grid-rows-3 border-4 border-black w-2/5 mx-auto mt-12 mr-20 h-[45rem] text-4xl font-bold text-indigo-600">
            <button
              className="border-2 border-indigo-600"
              onClick={handleClick}
              data-idrow={0}
              data-idcol={0}
            ></button>
            <button
              className="border-2 border-indigo-600"
              onClick={handleClick}
              data-idrow={0}
              data-idcol={1}
            ></button>
            <button
              className="border-2 border-indigo-600"
              onClick={handleClick}
              data-idrow={0}
              data-idcol={2}
            ></button>
            <button
              className="border-2 border-indigo-600"
              onClick={handleClick}
              data-idrow={1}
              data-idcol={0}
            ></button>
            <button
              className="border-2 border-indigo-600"
              onClick={handleClick}
              data-idrow={1}
              data-idcol={1}
            ></button>
            <button
              className="border-2 border-indigo-600"
              onClick={handleClick}
              data-idrow={1}
              data-idcol={2}
            ></button>
            <button
              className="border-2 border-indigo-600"
              onClick={handleClick}
              data-idrow={2}
              data-idcol={0}
            ></button>
            <button
              className="border-2 border-indigo-600"
              onClick={handleClick}
              data-idrow={2}
              data-idcol={1}
            ></button>
            <button
              className="border-2 border-indigo-600"
              onClick={handleClick}
              data-idrow={2}
              data-idcol={2}
            ></button>
          </section>
          <section className="text-4xl m-auto ml-0">
            <p>
              Player <span className="text-indigo-600">'{turn}'</span> playing
            </p>
            {gameOver ? (
              <Modal
                winner={winner}
                draw={draw}
                handleRestart={handleRestart}
              />
            ) : null}
          </section>
        </div>
      </main>
    </>
  );
}

export default App;
