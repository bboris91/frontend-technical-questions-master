import { useState, useRef } from "react";

const timer = (initialState = 0) => {
  const [timer, setTimer] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const increment = useRef(null);

  const handleStart = () => {
    setIsActive(true);
    increment.current = setInterval(() => {
      setTimer(timer + 1);
    }, 1000);
  };

  const handleStop = () => {
    clearInterval(increment.current);
    setIsActive(false);
  };
  const handleReset = () => {
    setTimer(0);
  };

  return {
    timer,
    isActive,
    handleStart,
    handleStop,
    handleReset,
  };
};

export { timer };
