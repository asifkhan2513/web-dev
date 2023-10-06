//Prototypes are the mechanism by which JavaScript objects inherit
//features from one another. In this article, we explain what a
//prototype is, how prototype chains work, and how a prototype
//for an object can be set.

let a = {
  name: "Asif",
  age: 23,
  run: "self running", //
};

let p = {
  run: "Running",
};

p.__proto__ = {
  name2: "jackie",
};
a.__proto__ = p;

console.log(a.name2);

// practice 2
console.log("this is for second");

let myobject = {
  city: "Siddharth nagar",
  greet() {
    console.log("this is greet function");
  },
};
myobject.greet();
console.log(myobject.toString());
console.log(myobject.valueOf());
console.log(Object.getPrototypeOf(myobject));

// practice third
console.log(" this for thirds");
const myDate = new Date();
let object = myDate;

do {
  object = Object.getPrototypeOf(object);
  console.log(object);
} while (object);

//this is type of four shadowing proerties\
console.log("this is four properties");
const mydate2 = new Date(1995, 11, 17);
console.log(mydate2.getYear());
mydate2.getYear = function () {
  console.log("something else");
};
mydate2.getYear();


console.log("this is the next method")
let arr = [1,2,5,6,6,5]
console.log(arr.__proto__)
console.log(arr.__proto__=== Array.prototype)