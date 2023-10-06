// (...) spread operator
// this method for array
let arr = [3,5,6,7,8,9]
let [ a, b,c,...others]= arr 
console.log(a,b,c, others);

// method 2 this is for object 

let  obj = { a:1,b:2,c:3}
const m ={...obj}
console.log(m);


// method array in object

 let arr1 = [2,3,4]
 let obj1 = {...arr1}
 console.log(obj1);


 function sum(v1 , v2 ,v3){
    return v1+v2+v3;
 }
 console.log(sum(...arr1));






