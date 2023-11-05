// function declaration
// this is type 1
function sum ( a, b){
return a+b;
}

console.log(sum(1,2));
console.log(sum(1))  // there will be NaN output

// suppose tha we pass only one argument in above code then the output will be NaN


// this is the second type of  function . it is know as assigment function

let add = function(a,b){
  return a+b
}
console.log(add(4,5))

console.log(add(1,2,3,4)) // it will considering the value which gives as  parameter and remain left



// the fix the this problem using arguments object
let mul = function (){
  let total = 1
  for (const value of arguments) {
    total = total * value
  }
  return total
}
console.log(mul(1,2,3,4,5,6))


// next type function  using rest operator
 
 let mult = function(...things){
  let total = 0
  for (const key of things) {
    total = total + things;
  }
  return total
 }
  console.log(mult(1,2,3,4,5))



  // next type declaration
  // this  is called default  function

  let multi = function(a = 5 , b = 6, ...things){
    let total = 0
    for (const key of things) {
      total = total + things;
    }
    return total
   }
    console.log(mult(9))
