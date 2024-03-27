interface ClockFaceProps {
  time: number;
}

export const ClockFace: React.FC<ClockFaceProps> = ({ time }) => {
  return (
    <>
      <div className="clock-container">
        <div className="minutes">
          {Math.floor(time / 60)
            .toString()
            .padStart(2, "0")}
        </div>
        <span>:</span>
        <div className="seconds">
          {Math.floor(time % 60)
            .toString()
            .padStart(2, "0")}
        </div>
      </div>
    </>
  );
};
