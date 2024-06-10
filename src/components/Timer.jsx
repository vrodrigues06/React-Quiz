import React from "react";
import { finishTest, onClock } from "../state";

const Timer = ({ timer, dispatch }) => {
  React.useEffect(() => {
    const timeToFinish = setInterval(() => {
      dispatch(onClock());
    }, 1000);

    if (timer === 0) dispatch(finishTest());

    return () => {
      clearInterval(timeToFinish);
    };
  }, [timer, dispatch]);

  return (
    <div className="timer">
      {Math.floor(timer / 60) < 10
        ? "0" + Math.floor(timer / 60)
        : Math.floor(timer / 60)}
      :{timer % 60 < 10 ? `0` + (timer % 60) : timer % 60}
    </div>
  );
};

export default Timer;
