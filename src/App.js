import Header from "./Header";
import Loading from "./Loading";
import Main from "./Main";
import React from "react";
import StartScreen from "./StartScreen";
import Error from "./Error";
import { reducer, dataReceived, dataFailed } from "./state";
import Question from "./Question";
import NextButton from "./components/NextButton";
import Progress from "./components/Progress";
import FinishedScreen from "./components/FinishedScreen";
import Timer from "./components/Timer";

const initialState = {
  questions: [],

  // loading, error, ready, active, finished
  status: "loading",
  current: 0,
  answer: null,
  points: 0,
  maxPoints: 0,
  highscore: 0,
  timer: 60 * 5,
};

function App() {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const {
    questions,
    status,
    current,
    answer,
    points,
    maxPoints,
    highscore,
    timer,
  } = state;

  React.useEffect(function () {
    async function getData() {
      try {
        const response = await fetch("http://localhost:8000/questions");

        if (!response.ok) {
          throw new Error("Failed to fetch!");
        }

        const data = await response.json();

        dispatch(dataReceived(data));
      } catch (err) {
        dispatch(dataFailed());
      }
    }
    getData();
  }, []);

  return (
    <div className="app">
      <Header />

      <Main>
        {status === "loading" && <Loading />}
        {status === "ready" && (
          <StartScreen questionsLength={questions.length} dispatch={dispatch} />
        )}
        {status === "active" && (
          <>
            <Progress
              current={current}
              questionsLength={questions.length}
              points={points}
              answer={answer}
              maxPoints={maxPoints}
            />
            <Question
              // key={questions[current].question}
              question={questions[current]}
              answer={answer}
              questionsLength={questions.length}
              current={current}
              dispatch={dispatch}
            />
            <Timer timer={timer} dispatch={dispatch} />
            <NextButton
              dispatch={dispatch}
              answer={answer}
              current={current}
              questionsLength={questions.length}
            />
          </>
        )}
        {status === "error" && <Error />}
        {status === "finished" && (
          <FinishedScreen
            points={points}
            maxPoints={maxPoints}
            highscore={highscore}
            dispatch={dispatch}
          />
        )}
      </Main>
    </div>
  );
}

export default App;
