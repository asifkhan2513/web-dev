// for(let rep = 0; rep<=10; rep++){
//     console.log('lifting weight is repetition ${rep}');

// }

const jonas = [
  "jonas",
  "schmandtmann",
  2037 - 1991,
  ["michael", "peter", "steven"],
  true,
];
for (let i = 0; i < jonas.length; i++) {
  console.log(jonas[i], typeof jonas[i]);
  console.log(jonas[0]);
}

const year = [1991, 1969, 2020];
const age = [];
for (let index = 0; index < year.length; index++) {
  age.push(2037 - year[index]);
}
console.log(age);
