// ex01 introduce interfaces

interface Person {
  name: string;
  age: number;
}

const person: Person = {
  name: "Ravi",
  age: 20,
};

//ex 02 complex interface practice

interface Car {
  make: string;
  model: string;
  year: number;
  isElectric: Boolean;
  features: string[];
}

//ex 03 using interface in a function call

function displayPerson(person: Person): void {
  console.log(`Name: ${person.name}, Age: ${person.age}`);
}

displayPerson({ name: "Pradeep", age: 30 });

//ex 04: function signature as an interface

interface Mathfunction {
  (a: number, b: number): number;
}

const add: Mathfunction = (a, b) => a + b;

interface Doublefunction {
  (num: number): number;
}

const doubleNumber: Doublefunction = (a) => a * 2;

interface Square {
  (a: number): number;
}

const square: Square = (a) => a * a;

//ex05: simple function with generics

function identity<T>(value: T): T {
  return value;
}

identity<number>(23);

//ex 06: useful function exercise with generics#

function findItem<T>(items: T[], value: T): number {
  return items.indexOf(value);
}

findItem([1, 2, 3, 4, 5], "3");
findItem(["mango", "banana", "orange"], 3);
findItem(["mango", "banana", "apple", 3], "guava"); // give an error? Yes

//ex 07: interfaces with optional properties

interface Book {
  title: string;
  author: string;
  year: number;
  genre?: string;
}

let book: Book = {
  title: "ikiGai",
  author: "SeekYo Hun",
  year: 2010,
};
