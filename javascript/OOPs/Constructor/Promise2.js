/*let  p = new Promise((resolve ,reject)=>{
  //  do a asynchronous task
  // db call ,cryptography,network systemcall
  setTimeout(() => {
    console.log("asynchronous task is complete");

    resolve();// this is use connect with then functipon
  }, 3000);
})
p.then(()=>{
  console.log("task is complete")
})

// second type
new Promise((resolve,reject)=>{
  setTimeout(() => {
    console.log("Asychronous task 2")
    resolve()
  }, 2000);
}).then(()=>[
  console.log("finally it is finish")
])

// third type

new Promise((resolve,reject)=>{
  setTimeout(() => {
    resolve({userName:"Asif",Email:"Asif@example.com"});
  }, 2000);
}).then((value)=>{
  console.log(value)
})


//type four
const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ userName: "Asif", Email: "Asif@example.com" });
    } else {
      reject("Errror : something wrong at this line");
    }
  }, 2000);
});
promiseFour
  .then((user) => {
    console.log(user);
    return user.userName;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("the promise either resolve or rejected ");
  });
*/
// type five
const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ program: "JavaScript", Father: "Bredon each" });
    } else {
      reject("Errro : something went wrong");
    }
  },2000);
});

async function consumePromiseFive(){
  try {
    const responce = await promiseFive
    console.log(responce)
  } catch (error) {
    console.log(error)
  }
}
consumePromiseFive()

// fetching  from using async await method 
async function getAllUser(){
  try {
   let responce=  await fetch('https://jsonplaceholder.typicode.com/users')
   let data = await responce.json()
   console.log(data)
  } catch (error) {
    console.log(error)
  }
}
getAllUser()


// fetching from api  using  then methon
fetch('https://jsonplaceholder.typicode.com/users').then((responce)=>{
  return responce.json();

}).then((date)=>{
  return data
}).catch((error)=>{
  console.log(error)
})
