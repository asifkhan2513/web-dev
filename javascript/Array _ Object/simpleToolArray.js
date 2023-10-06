// slice method 

let arr= ['a','b','c','d','e']
console.log(arr.slice(2,4));// slicing array
console.log(arr.slice(-2))// minus will start from end of the array




// splice array
// console.log(arr.splice(2))
arr.splice(2)
console.log(arr)


// reverse
const arr2 = ['j','i','h','g','f']
console.log(arr2.reverse())
console.log(arr2)

// concat

const letter = arr.concat(arr2)
console.log(letter)
console.log([...arr,...arr2])

 // join method
 console.log(letter.join('-'))