interface ButtonProps {
  active: boolean;
  paused: boolean;
  time: number;
  handleStart: () => void;
  handlePause: () => void;
  handleReset: () => void;
}

export const Buttons: React.FC<ButtonProps> = (props) => {
  const StartButton = (
    <button className="button button-start" onClick={props.handleStart}>
      Start
    </button>
  );

  const PauseResetButton = (
    <>
      <button
        className={props.paused ? "button button-start" : "button button-pause"}
        onClick={props.handlePause}
      >
        {props.paused ? "Resume" : "Pause"}
      </button>
      <button className="button button-reset" onClick={props.handleReset}>
        Reset
      </button>
    </>
  );

  return (
    <div className="button-container">
      {!props.active ? StartButton : PauseResetButton}
    </div>
  );
};
