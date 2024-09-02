import { useEffect, useState } from "react";
import "./App.css";
import GameBoard from "./components/GameBoard";
import Header from "./components/Header";
import ResultArea from "./components/ResultArea";

function App() {
  const [start, setStart] = useState(false);
  const [timer, setTimer] = useState(10);
  const [disp, setDesp] = useState("none");
  const [topPosition, setTopPosition] = useState("10px");
  const [leftPosition, setLeftPosition] = useState("10px");
  const [rightPosition, setRightPosition] = useState("10px");
  const [BottomPosition, setBottomPosition] = useState("10px");
  const [clicked, setClicked] = useState(0);
  const [tableData, setTableData] = useState([]);

  const startGame = (e) => {
    e.preventDefault();
    setStart(true);
  };

  const pauseGame = (e) => {
    e.preventDefault();
  };

  const clickCountFunc = (e) => {
    e.preventDefault();
    setClicked(clicked + 1);
    setTableData([
      ...tableData,
      {
        mouseClick: clicked + 1,
        reactionTime: "",
      },
    ]);
    setTopPosition(`${Math.random() * 100}px`);
    setLeftPosition(`${Math.random() * 100}px`);
    setRightPosition(`${Math.random() * 100}px`);
    setBottomPosition(`${Math.random() * 100}px`);
  };

  useEffect(() => {
    if (start) {
      console.log(1);

      setDesp("block");
    } else {
      console.log(2);

      setDesp("none");
    }
  }, [start]);

  useEffect(() => {
    setInterval(() => {
      setTopPosition(`${Math.random() * 100}px`);
      setLeftPosition(`${Math.random() * 100}px`);
      setRightPosition(`${Math.random() * 100}px`);
      setBottomPosition(`${Math.random() * 100}px`);
    }, timer * 1000);
  }, []);

  return (
    <div className="container">
      <Header timer={timer} setTimer={setTimer} startGame={startGame} />
      <GameBoard
        topPosition={topPosition}
        leftPosition={leftPosition}
        rightPosition={rightPosition}
        BottomPosition={BottomPosition}
        disp={disp}
        clickCountFunc={clickCountFunc}
      />
      <ResultArea tableData={tableData} />
    </div>
  );
}

export default App;
