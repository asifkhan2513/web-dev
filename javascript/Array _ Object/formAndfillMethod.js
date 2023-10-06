const arr = [1, 2, 3, 4, 65, 4, 15];

console.log(new Array(1, 2, 3));

const x = new Array(1, 2, 3, 4, 5);

console.log(x);

// arr.fill(2) // fill value all position by defualt


arr.fill(2, 5, 6); // fill method first parameter id value and 2nd and third mean from to end insert any value

console.log(arr);
