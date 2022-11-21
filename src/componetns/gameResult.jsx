import React from "react";

export const GameResult = ({ board, onRestart }) => {
  let contents = "";
  if (board.hasWon()) {
    contents = "Мыкты👍!";
  } else if (board.hasLost()) {
    contents = "Утулуп калдың☹️";
  }
  if (!contents) {
    return null;
  }
  return (
    <div className="overlay">
      <p className="message">{contents}</p>
      <button className="tryAgain" onClick={onRestart} onTouchEnd={onRestart}>
        Башынан ойноп көр да
      </button>
    </div>
  );
};
