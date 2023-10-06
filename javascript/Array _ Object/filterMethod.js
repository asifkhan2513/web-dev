const movements = [200, 450, -400, 3000, -130, 70, 130];
const  despositefor = []
for(const mov of movements) if(mov>0) despositefor.push(mov)
console.log(despositefor)
// console.log(movements);






// here is tryimng second method

const ages = [46, 33, 16, 15, 23];

function checkAdult(ages) {
  if (ages > 18) {
    console.log(`you are adult = ${ages}`);
  } else {
    console.log(`you are  child = ${ages}`);
  }
}

const result = ages.filter(checkAdult); // in the filter method we will call in filter method in the function name

console.log(result);

// third example from mdn reference

const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];
