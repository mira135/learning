import { useState } from "react";
import "./styles/Timer.css";
import "./components/ClockFace.tsx";
import { ClockFace } from "./components/ClockFace.tsx";
import { Button } from "./components/Button.tsx";

export const Timer = () => {
  return (
    <>
      <div className="container">
        <ClockFace />
        <div className="button-container">
          <Button className={"button button-start"} text="Start" />
          <Button className={"button button-pause"} text="Pause" />
          <Button className={"button button-reset"} text="Reset" />
        </div>
      </div>
    </>
  );
};
