'use strict';
// method 1
const arr = [ 7,8,9]
const badNewArr = [ 1,2,3,arr[0],arr[1],arr[2]]
console.log(badNewArr);
//  method 2

const newArr = [1,2,3,...arr]
console.log(newArr);
console.log(...newArr);