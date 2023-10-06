var ages = [10, 13, 18, 20];

// some method for this method we need match atleast at one condition;


const b = ages.some(checknumber);
console.log(b);

// every method
// for evrery method we need to verify all condition match;

const ck = ages.every(checknumber);
console.log(ck);

function checknumber(age) {
  return age >= 18;
}




// now check all element divisible by 2 or not


const arr = [1,2,3,4,5,6];
const even = element   =>   element%2===0
console.log(arr.some(even))


//going to the every method


const arr2 = [1,3,,5]
const odd = element =>element%2!==0
console.log(arr2.every(odd))



