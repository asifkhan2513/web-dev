let p1 = new Promise((resolve, reject) => {
  console.log("promise is pending");
  setTimeout(() => {
    console.log("i am promise resove");
    resolve(true);
    // reject(new Error(" i am an error"));
  }, 5000);
});

let p2 = new Promise((resolve, reject) => {
  console.log("promise is pending");
  setTimeout(() => {
    console.log("i am promise rejected");

    // resolve(true);
    reject(new Error(" i am an error"));
  }, 5000);
});

// To Catch the value
p1.then((value) => {
  console.log(value);
});

//To catch the error
p2.catch((value) => {
  console.log("some error in occue in p2");
});

p2.then(
  (value) => {
    console.log(value);
  },
  (error) => {
    console.log("some error occur in p2");
  }
);
N;
