const Modal = ({ winner, draw, handleRestart }) => {
  return (
    <div className="w-screen h-screen bg-indigo-600/70 flex justify-center items-center text-black font-bold absolute top-0 right-0">
      <div className="w-2/6 bg-white h-[40%] rounded-lg flex flex-col justify-center items-center">
        {winner !== "" ? (
          <p>
            Winner is: <span className="text-indigo-600">{winner}</span>
          </p>
        ) : draw ? (
          <p>Its a draw</p>
        ) : (
          ""
        )}
        <button
          className="p-2 w-2/5 bg-indigo-600 rounded-lg mt-16 text-white text-2xl hover:bg-indigo-800 transition-colors duration-150"
          onClick={handleRestart}
        >
          Restart Game!
        </button>
      </div>
    </div>
  );
};

export default Modal;
