let n = parseInt(prompt("Enter Any Number "));

// checking if number is negative
if (n < 0) {
  console.log("Error is negative number is does not exist");
}

// number is equal to zero
else if (n === 0) {
  console.log(`the number ${n} is = 1`);
} else {
  let fact = 1;

  for (i = 1; i <= n; i++) {
    fact = fact * i;
  }
  console.log(`the factiorial is ${n} is = ${fact}`);
}
