import { useState } from "react";

export const ClockFace = () => {
  // const [now, setNow] = useState;

  return (
    <>
      <div className="clock-container">
        <div className="minutes">12</div>
        <span>:</span>
        <div className="seconds">12</div>
      </div>
    </>
  );
};
