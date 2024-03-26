type functionAnswerCheck = (
  selectedOption: number,
  correctAnswer: number
) => boolean;

export const checkAnswer: functionAnswerCheck = (
  selectedOption,
  correctAnswer
) => {
  if (selectedOption === correctAnswer) {
    return true;
  } else {
    return false;
  }
};
