export function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return { ...state, questions: action.payload, status: "ready" };
    case "dataFailed":
      return { ...state, status: "error" };
    case "start":
      const sumPoints = state.questions.reduce(
        (acc, current) => acc + current.points,
        0
      );

      return { ...state, status: "active", maxPoints: sumPoints };
    case "newAnswer":
      const { correctOption, points } = state.questions.at(state.current);
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === correctOption
            ? state.points + points
            : state.points,
      };
    case "next":
      return { ...state, current: state.current + 1, answer: null };
    case "finish":
      return {
        ...state,
        status: "finished",
        highscore:
          state.points > state.highscore ? state.points : state.highscore,
      };
    case "restart":
      return {
        ...state,
        status: "ready",
        current: 0,
        answer: null,
        points: 0,
        timer: 60 * 5,
      };
    case "onClock": {
      return { ...state, timer: state.timer - 1 };
    }
    default:
      throw new Error("Action unknown");
  }
}

// ACTIONS

export function dataReceived(data) {
  return { type: "dataReceived", payload: data };
}

export function dataFailed(data) {
  return { type: "dataFailed" };
}

export function startQuiz() {
  return { type: "start" };
}

export function newAnswer(answer) {
  return { type: "newAnswer", payload: answer };
}

export function nextQuestion() {
  return { type: "next" };
}

export function finishTest() {
  return { type: "finish" };
}

export function restartQuiz() {
  return { type: "restart" };
}

export function onClock() {
  return { type: "onClock" };
}
