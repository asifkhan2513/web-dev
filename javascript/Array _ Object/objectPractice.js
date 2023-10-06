// function to object
const jonas = {
  firsName: "Asif",

  lastName: "Schuman",

  birthYear: 1990,
  age: 32,

  hasDrivingLicense: true,

  calAge: function (birthYear) {
    return 2037 - this.birthYear;
  }
  
};
let b = jonas.calAge(1991);
console.log(b);
console.log(typeof b);

// c= jonas['calAge'](1991)
// console.log(typeof c
