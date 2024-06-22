let p1  = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve("Value 1");
  },1000)
})
let p2  = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve("Value 2");
  },2000)
})
let p3  = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve("Value 3");
  },3000)
})

let Promise_All = Promise.all([p1,p2,p3])
// console.log(Promise_All)
Promise_All.then((Value)=>{
  console.log(Value)
}).finally(()=>{
  console.log("program run succesfull")
})


// promise settled
//  if any type of error occur in any  above code  then AllSettle function ignore the error
let p4  = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    // resolve("Value 1");
    reject(new Error("error"));
  },1000)
})
let p5  = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve("Value 2");
  },2000)
})
let p6  = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve("Value 3");
  },3000)
})
let promise_settle = Promise.allSettled([p4,p5,p6])
promise_settle.then((Value)=>{
  console.log(Value)
})


/* race mean which is run first in our  code which
  time limit is minimum*/

let p7 = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve("Value 1");
    // reject(new Error("error"));
  },11000)
})
let p8 = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve("Value 2");
    // reject(new Error("Error"))
  },2000)
})
let p9 = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve("Value 3");
  },3000)
})
let promise_race = Promise.race([p7,p8,p9])
promise_race.then((Value)=>{
  console.log(Value)
})

// any function in  run any one of them
let p10 = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve("Value 1");
    // reject(new Error("error"));
  },11000)
})
let p11 = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve("Value 2");
    // reject(new Error("Error"))
  },2000)
})
let p12 = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve("Value 3");
  },3000)
})
let promise_Any = Promise.any([p10,p11,p12])
promise_race.then((Value)=>{
  console.log(Value)
})