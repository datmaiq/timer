import React from "react";
import { useState, useEffect } from "react";

function controlTIme() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setTime((time) => time + 1);
      }, 1000);
    }

    return () => {
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
}

export default controlTIme;
