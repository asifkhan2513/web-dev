// a function that is pass an argument is known as callback function

//1
//synchronous programing

let a = prompt("What is your  name ");
let b = prompt("what is your age ");
let c = prompt("what is your fav color");
console.log(a + " is " + b + " years old and " + c + " fav color ");

// asychronous programing
setTimeout(() => {
  console.log("my name is asif");
}, 3000);
 
//2

const funA = () => {
  setTimeout(() => {
    console.log("this is function A");
    setTimeout(() => {
      funB();
    }, 3000);
  }, 3000);
};

const funB = () => {
  console.log("this is function B");
};
funA();

// 3
const perOne = (friend, callfriend) => {
  console.log(`i am busy with ${friend} i will callback you soon`);
  callfriend(); // this function is known as call back function
};
const perTwo = () => {
  console.log(`Hey what's up i will call back you soon`);
};
perOne("Asif", perTwo); // here is caling callback function
// perTwo();// we call this function in  one function

let img = document.createElement("img");
img.src = "https://js.cx/clipart/train.gif";

img.onload = () => {
  alert(`image size is ${img.width}  X ${img.height}`);
};
img.onerror = () => {
  alert(`error problem while loading`);
};
