// TS3.1_CW and TS3.2 exercises

import { useState } from "react";
import Header from "./components/Header";
import Quiz from "./components/Quiz";
import Score from "./components/Score";
import { checkAnswer } from "./utils/checkAnswer";
import "./App.css";

type onOptionClick = (index: number) => void;

function App() {
  const quizData = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Madrid"],
      correctOption: 0,
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Jupiter", "Venus"],
      correctOption: 1,
    },
    {
      question: "What is the largest mammal?",
      options: ["Elephant", "Giraffe", "Blue Whale", "Hippopotamus"],
      correctOption: 2,
    },
    {
      question: "Who painted the Mona Lisa?",
      options: [
        "Vincent van Gogh",
        "Leonardo da Vinci",
        "Pablo Picasso",
        "Michelangelo",
      ],
      correctOption: 1,
    },
    {
      question: "Which gas do plants absorb from the atmosphere?",
      options: ["Oxygen", "Carbon Dioxide", "Hydrogen", "Nitrogen"],
      correctOption: 1,
    },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [score, setScore] = useState<number>(0);

  const onClickOption: onOptionClick = (selectedIndex: number) => {
    const currentQuestion = quizData[currentQuestionIndex];
    if (checkAnswer(selectedIndex, currentQuestion.correctOption)) {
      setScore(score + 1);
    }
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  return (
    <div className="App">
      <Header title="Quiz App" />
      {currentQuestionIndex < quizData.length ? (
        <Quiz
          quiz={quizData[currentQuestionIndex]}
          onOptionClick={onClickOption}
        />
      ) : (
        <div>
          <Score currentScore={score} totalScore={quizData.length} />
          <button onClick={() => setCurrentQuestionIndex(0)}>Play Again</button>
        </div>
      )}
    </div>
  );
}

export default App;
