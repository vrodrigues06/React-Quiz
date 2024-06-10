import React from "react";
import { newAnswer } from "../state";

const Options = ({ question, dispatch, answer }) => {
  const { options, correctOption } = question;
  const hasAnswer = answer !== null;

  function handleNewAnswer({ target }) {
    const indexAnswer = options.findIndex(
      (option) => option === target.textContent
    );

    dispatch(newAnswer(indexAnswer));
  }

  return (
    <div className="options">
      {options.map((option, index) => {
        return (
          <button
            onClick={handleNewAnswer}
            disabled={hasAnswer}
            className={`btn btn-option ${index === answer ? "answer" : ""} ${
              hasAnswer ? (index === correctOption ? "correct" : "wrong") : ""
            }`}
            key={option}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
};

export default Options;
