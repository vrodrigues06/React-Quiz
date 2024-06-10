import React from "react";
import { startQuiz } from "./state";

const StartScreen = ({ questionsLength, dispatch }) => {
  function handleStart() {
    dispatch(startQuiz());
  }

  return (
    <div>
      <h2>Bem-Vindo a Quiz do React</h2>
      <h3>
        {questionsLength} questões para testar seu conhecimento sobre React
      </h3>
      <button className="btn btn-ui" onClick={handleStart}>
        Vamos Começar!
      </button>
    </div>
  );
};

export default StartScreen;
