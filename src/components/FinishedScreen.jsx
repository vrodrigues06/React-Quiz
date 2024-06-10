import React from "react";
import { restartQuiz } from "../state";

const FinishedScreen = ({ points, maxPoints, highscore, dispatch }) => {
  const percent = (points / maxPoints) * 100;

  let emoji;
  if (percent === 100) emoji = "🥇";
  if (percent >= 80 && percent < 100) emoji = "🎉";
  if (percent >= 50 && percent < 80) emoji = "🙃";
  if (percent >= 0 && percent < 50) emoji = "🤨";
  if (percent === 0) emoji = "🤦‍♂️";

  return (
    <>
      <p className="result">
        {emoji} Sua pontuação foi <strong>{points}</strong> de {maxPoints} (
        {Math.ceil(percent)}%){" "}
      </p>
      <p className="highscore">(Highscore: {highscore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch(restartQuiz())}
        style={{ margin: "0 auto", float: "none" }}
      >
        Reiniciar o Teste
      </button>
    </>
  );
};

export default FinishedScreen;
