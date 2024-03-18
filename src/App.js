import "./App.css";
import { useState, useEffect } from "react";
import { convertTime } from "./convertTime";

const App = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    let interval;
    console.log("component style");
    if (isRunning) {
      interval = setInterval(() => {
        setTime((time) => time + 1);
      }, 1000);
    }

    return () => {
      console.log("component destroy");
      clearInterval(interval);
    };
  }, [isRunning]);

  const startTimer = () => {
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    if (!isRunning) {
      setHistory((prev) => [...prev, time]);
      setTime(0);
      // console.log(history);
    }
  };
  return (
    <div className="timer-wrap">
      <div className="timer">{convertTime(time)}</div>
      <div className="timer-buttons">
        <button onClick={startTimer} className="timer-button">
          Start
        </button>
        <button onClick={stopTimer} className="timer-button-stop">
          Stop
        </button>
        <button
          onClick={resetTimer}
          className="timer-button"
          disabled={isRunning}
        >
          Reset
        </button>
      </div>
      <div className="timer-history">
        <h2>Record</h2>
        {history.map((time, index) => (
          <div key={index}>{convertTime(time)}</div>
        ))}
      </div>
    </div>
  );
};

export default App;
