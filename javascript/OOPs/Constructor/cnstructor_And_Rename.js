"use strict";

const person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};
const a = new person("Asif", 2000);
console.log(a);

// this is the second type of constructor

// there are some important type of constructor
//  /*
//  constructor() { /* … */}
// constructor(argument0) { /* … */ }
// constructor(argument0, argument1) { /* … */ }
// constructor(argument0, argument1, /* …, */ argumentN) { /* … */ }
// */

// parameterise construtor

// 1

class Polygon {
  constructor() {
    this.name = "Asif";
  }
}

const poly1 = new Polygon();

console.log(poly1.name);

// 2
class person1 {
  constructor(name) {
    this.name = name;
  }
  introduction() {
    console.log(`Hello my name is ${this.name}`);
  }
}
const x = new person1("Asif");
console.log(x);

// 3
