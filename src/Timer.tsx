import { useState, useEffect } from "react";
import "./styles/Timer.css";
import "./components/ClockFace.tsx";
import { ClockFace } from "./components/ClockFace.tsx";
import { Buttons } from "./components/Buttons.tsx";
import { useRenderCount } from "./hooks/useRenderCount.tsx";

export const Timer = () => {
  const numberOfRenders = useRenderCount();
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    let interval = 0;
    if (isActive && isPaused === false) {
      interval = setInterval(() => setTimer((t) => t + 1), 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, isPaused]);

  const handleStart = () => {
    if (isActive && isPaused) return;
    setIsActive(true);
    setIsPaused(false);
  };

  const handlePause = () => {
    setIsPaused(!isPaused);
  };

  const handleReset = () => {
    setIsActive(false);
    setTimer(0);
  };

  return (
    <>
      <div className="container">
        <ClockFace time={timer} />
        <h3 className="render-count">Number of renders: {numberOfRenders}</h3>

        <Buttons
          active={isActive}
          paused={isPaused}
          time={timer}
          handleStart={handleStart}
          handlePause={handlePause}
          handleReset={handleReset}
        />
      </div>
    </>
  );
};
