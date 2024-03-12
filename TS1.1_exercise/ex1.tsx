// let myNumber: number = 2;

let myNumber: number = 23;

let myName: string = "PRadeep";

let isStudent: boolean = true;

let myData: null = null;

let numbersArray: number[] = [1, 2, 3, 4, 5];

numbersArray.push("34"); // throws error since array type is number

let fruits: string[] = ["apple", "dry fruit"];

fruits.push(13); //throws error since array type is string

// let objectName: {
//     propertyName1: propertyType1
//     propertyName2: propertyType2
//   } = { propertyName1: propertyValue, propertyName2: propertyValue }

// propertyType could be anything from variableType

let myDetails: {
  name: string;
  age: number;
} = {
  name: "Pradeep",
  age: 23,
};

console.log({ myDetails });

let car: {
  make: string;
  year: number;
} = {
  make: "Innova Hycross",
  year: 2023,
};

let student: {
  name: string;
  age: number;
  isEnrolled: boolean;
} = {
  name: "Pradeep",
  age: 18,
  isEnrolled: true,
};

let personDetails: {
  name: string;
  age: number;
  hobbies: string[];
  address: {
    street: string;
    city: string;
  };
  isStudent: boolean;
  scores: number[];
  extraInfo: null;
} = {
  name: "Ravi",
  age: 20,
  hobbies: ["reading", "writing", "gardening"],
  address: {
    street: "34 bkc road",
    city: "Mumbai",
  },
  isStudent: true,
  scores: [23, 45, 67],
  extraInfo: null,
};

/******** Types */

type TypeA = { propA: string };

let obj1: TypeA = {
  propA: "Ravi",
};

type TypeB = { propB: number };

let obj2: TypeB = {
  propB: 45,
};

type TypeC = TypeA & TypeB;

let objC: TypeC = {
  propA: "Amish",
  propB: 34,
};

type Person = {
  name: string;
  age: 34;
};

type Student = Person & {
  studentId: string;
};

type Teacher = Person & {
  subject: string;
};

let id: string | number;

let numberOrStringArray : (number | string)[] = [1,2,"ravi"] ;

let mixedArray : (number| string | boolean) [] = [1,2,"ravi"];
