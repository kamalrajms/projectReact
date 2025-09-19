import React, { useState, useEffect } from "react";

export default function Timer() {
  const [Sec, setSec] = useState(0);
  const [IsRunning, setIsrunning] = useState(false);

  useEffect(() => {
    let interval;
    if (IsRunning) {
      interval = setInterval(() => {
        setSec((prev) => prev + 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [IsRunning]);

  const handleStart = () => {
    setIsrunning(true);
  };
  const handlestop = () => {
    setIsrunning(false);
  };
  const reset = () => {
    setSec(0);
    setIsrunning(false);
  };
  return (
    <div>
      <h1>Timer :{Sec}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handlestop}>Stop</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
