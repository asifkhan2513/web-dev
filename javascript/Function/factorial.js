// let a = prompt(" enter any number ");
// a = Number.parseInt(a);
// Recursion Method for find factorial
function facto(a) {
  if (a === 0 || a === 1) {
    return 1;
  } else {
    return a* facto(a-1);
  }
}
let fact = facto(5);
console.log(fact)
