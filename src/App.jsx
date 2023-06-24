import { useState } from "react";

let board = [
  ["-", "-", "-"],
  ["-", "-", "-"],
  ["-", "-", "-"],
];

function App() {
  const [turn, setTurn] = useState("X");

  const handleClick = (e) => {
    if (e.target.innerText) return;

    e.target.innerText = turn;

    fillBoard(e);

    checkWin(e);

    turn === "X" ? setTurn("O") : setTurn("X");

    return;
  };

  const checkWin = () => {};

  const fillBoard = (e) => {
    const id = parseInt(e.target.id);

    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[i][j] === "-" && j === id) {
          board[i][e.target.id] = turn;
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
              id={0}
            ></button>
            <button
              className="border border-black"
              onClick={handleClick}
              id={1}
            ></button>
            <button
              className="border border-black"
              onClick={handleClick}
              id={2}
            ></button>
            <button
              className="border border-black"
              onClick={handleClick}
              id={0}
            ></button>
            <button
              className="border border-black"
              onClick={handleClick}
              id={1}
            ></button>
            <button
              className="border border-black"
              onClick={handleClick}
              id={2}
            ></button>
            <button
              className="border border-black"
              onClick={handleClick}
              id={0}
            ></button>
            <button
              className="border border-black"
              onClick={handleClick}
              id={1}
            ></button>
            <button
              className="border border-black"
              onClick={handleClick}
              id={2}
            ></button>
          </section>
          <section className="text-4xl m-auto ml-0">
            <p>
              Player <span className="text-indigo-600">'{turn}'</span> playing
            </p>
          </section>
        </div>
      </main>
    </>
  );
}

export default App;
