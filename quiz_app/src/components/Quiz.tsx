import React, { useState } from "react";

interface QuizProps {
  quiz: {
    question: string;
    options: string[];
    correctOption: number;
  };
  onOptionClick: (index: number) => void;
}

const Quiz: React.FC<QuizProps> = ({ quiz, onOptionClick }) => {
  return (
    <div>
      <h4>{quiz.question}</h4>
      {quiz.options.map((option, optionKey) => {
        return (
          <div key={`${option}-${optionKey}`}>
            <input
              type="radio"
              id={option}
              name={quiz.question}
              value={option}
              onClick={() => onOptionClick(optionKey)}
            />
            <label htmlFor={option}>{option}</label>
            <br />
          </div>
        );
      })}
    </div>
  );
};

export default Quiz;
