//ex01
function greet(name: string): void {
  console.log(`Hello ${name}`);
}

// greet("Pradeep")

//ex02
function addNumbers(a: number, b: number): void {
  console.log(a + b);
}

// addNumbers(2,3)

//ex03
function calculateVolume(
  length: number,
  width: number,
  height: number
): number {
  return length * width * height;
}

console.log(calculateVolume(2, 3, 4));

// ex-04
function printInfo(info: string | number): void {
  console.log(info);
}

printInfo("ravi");
printInfo(34);

type Info = string | number;

function printInfo2(info: Info): void {
  console.log(info);
}

//
// let variable: typeInfo1 = 42; // JavaScript + TypeScript

// // How do we define our own types?
// type typeVariable = typeValue1; // Pure TypeScript

// // then you will use this type as a type in JavaScript world

// let anotherVariable: typeVariable = //value

//ex 05
type Circle = {
  kind: "circle";
  radius: number;
};

type Rectangle = {
  kind: "rectangle";
  length: number;
  width: number;
};

type Shape = Circle | Rectangle;

function getArea(shape: Shape): number {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius * shape.radius;
  } else {
    return shape.length * shape.width;
  }
}

console.log(getArea({ kind: "circle", radius: 10 }));

//ex 06

type Person1 = {
  name: string;
  age: number;
};

type Student1 = Person1 & {
  studentId: string;
};

function convertPersonToStudent(person: Student1): Student1 {
  return {
    ...person,
    studentId: "S1234",
  };
}

//ex 07

function doubleNumbers(list: number[]): number[] {
  return list.map((item) => item * 2);
}
