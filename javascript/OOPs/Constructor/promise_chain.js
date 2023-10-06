let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Resove after two second");
    resolve(56);
  }, 2000);
});
p1.then((value) => {
  console.log(value);
  let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("promis p2");
    }, 2000);
  });
  return p2;
})  .then((value) => {
    console.log("We are done");
    return 2;
  })
  .then(() => {
    console.log("Now we are finally done");
  });
