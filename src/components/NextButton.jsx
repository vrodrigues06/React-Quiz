import React from "react";
import { finishTest, nextQuestion } from "../state";

const NextButton = ({ dispatch, answer, current, questionsLength }) => {
  function handleNextQuestion() {
    dispatch(nextQuestion());
  }

  if (answer === null) return null;
  if (current === questionsLength - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch(finishTest())}
        style={{ float: "right" }}
      >
        Finalizar Teste
      </button>
    );
  return (
    <button
      className="btn btn-ui"
      onClick={handleNextQuestion}
      style={{ float: "right" }}
    >
      Próxima Questão
    </button>
  );
};

export default NextButton;
