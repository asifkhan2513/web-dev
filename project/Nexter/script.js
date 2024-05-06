console.log("Asif");
a = 10;
b = 20;
console.log(a + b);
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  for (var i = n - 1; i >= 1; i--) {
    n *= i;
  }
  return n;
}

console.log(factorial(6));
