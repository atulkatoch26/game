import React, { useEffect } from "react";
import "./index.css";

const GameBoard = ({
  disp,
  topPosition,
  leftPosition,
  rightPosition,
  BottomPosition,
  clickCountFunc
}) => {
  return (
    <div className="game">
      <div
        style={{
          backgroundColor: "red",
          position: "relative",
          top: topPosition,
          left: leftPosition,
          right: rightPosition,
          bottom: BottomPosition,
          height: "10px",
          width: "10px",
          display: disp,
        }}
        onClick={(e) => clickCountFunc(e)}
      ></div>
    </div>
  );
};

export default GameBoard;
