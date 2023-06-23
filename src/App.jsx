import { useState } from "react";

let board = [
  ["1", "-", "-"],
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
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < 3; j++) {
        //if(board[i][j] === "-" &&  ){
        //}
      }
    }
  };

  return (
    <>
      <main>
        <h1>Tic Tac Toe</h1>
        <div className="grid grid-cols-3 grid-rows-3 border-2 border-black w-2/5 mx-auto mt-20 h-[45rem]">
          <button
            className="border border-black"
            onClick={handleClick}
            id="1"
          ></button>
          <button
            className="border border-black"
            onClick={handleClick}
            id="2"
          ></button>
          <button
            className="border border-black"
            onClick={handleClick}
            id="3"
          ></button>
          <button
            className="border border-black"
            onClick={handleClick}
            id="4"
          ></button>
          <button
            className="border border-black"
            onClick={handleClick}
            id="5"
          ></button>
          <button
            className="border border-black"
            onClick={handleClick}
            id="6"
          ></button>
          <button
            className="border border-black"
            onClick={handleClick}
            id="7"
          ></button>
          <button
            className="border border-black"
            onClick={handleClick}
            id="8"
          ></button>
          <button
            className="border border-black"
            onClick={handleClick}
            id="9"
          ></button>
        </div>
      </main>
    </>
  );
}

export default App;
