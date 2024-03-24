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

// ex 03: type for filtering array

type filterFunction<T> = (array: T[], predicate: (value: T) => boolean) => T[];

const isEven = (num: number) => num % 2 === 0;
const numbers = [1, 2, 3, 4, 5];

const filterArray: filterFunction<number> = (list, predicate) => {
  return list.filter(predicate);
};

console.log(filterArray(numbers, isEven));

// ex 04 type for map array

type mapFunction<T, R> = (list: T[], mapper: (value: T) => R) => R[];

const doubleToString = (num: number) => (num * 2).toString();
const numbersList = [1, 2, 3, 4, 5];

const mapArray: mapFunction<number, string> = (list, mapper) => {
  return list.map(mapper);
};

console.log(mapArray(numbersList, doubleToString));

// ex 05 type for reducing array

type reduceFunction<T, R> = (
  list: T[],
  accumulator: (acc: R, value: T) => R,
  initialValue: R
) => R;

const numberList = [1, 2, 3, 4, 5];
const sumAccumulator = (acc: number, num: number) => acc + num;

const reduceArray: reduceFunction<number, number> = (
  list,
  acc,
  initialValue
) => {
  return list.reduce(acc, initialValue);
};

console.log(reduceArray(numberList, sumAccumulator, 0));

const reduceStringArray: reduceFunction<string, string> = (
  list,
  acc,
  initialValue
) => {
  return list.reduce(acc, initialValue);
};

const stringSumAcc = (acc: string, char: string) => acc + char;

console.log(reduceStringArray(["a", "b", "c", "d", "e"], stringSumAcc, ""));
