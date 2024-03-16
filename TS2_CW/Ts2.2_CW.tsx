//ex 01: define type for array of objects

type QuizQuestion = {
  question: string;
  options: string[];
  correctOption: number;
};

const quizQuestions: QuizQuestion[] = [
  {
    question: "What is capital of India",
    options: ["Delhi", "Mumbai", "Kolkata", "Chennai"],
    correctOption: 0,
  },
  {
    question: "Who is prime minister of India",
    options: ["Atal Bajpaye", "Amit Shah", "Rahul Gandhi", "Narendra Modi"],
    correctOption: 3,
  },
];

//ex 02: define type for function inputs

type quizChecker = (quizQuestion: QuizQuestion, userAnswer: number) => boolean;

const checkQuizAnswer: quizChecker = (quizQuestion, userAnswer) => {
  return userAnswer === quizQuestion.correctOption;
};

// function quizChecker(question: QuizQuestion, userAnswer: number): boolean {
//   if (question.correctOption === userAnswer) {
//     return true;
//   } else {
//     return false;
//   }
// }

// ex 03: type for filtering array

type filterFunction<T> = (array: T[], predicate: (value: T) => boolean) => T[];
