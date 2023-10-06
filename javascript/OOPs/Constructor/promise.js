let promise = new Promise(function (resolve, reject) {
  console.log("hello");
  resolve(56);
});
setTimeout(() => {
  console.log("hello in two second");
}, 2000);

console.log("Hello " + "My name is three");
console.log(promise);
