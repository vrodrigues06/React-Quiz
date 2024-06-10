import React from "react";

const Progress = ({ current, questionsLength, points, maxPoints, answer }) => {
  return (
    <header className="progress">
      <progress
        max={questionsLength}
        value={current + Number(answer !== null)}
      />
      <p>
        Question <strong>{current + 1}</strong> / {questionsLength}
      </p>
      <p>
        <strong>{points}</strong> / {maxPoints}
      </p>
    </header>
  );
};

export default Progress;
