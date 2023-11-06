//it will be execute on web browser

let a = prompt(" enter number ")
a= Number.parseInt(a)
function eo(){
    if ((a%2==0)) {
        console.log("its is even number")
    }
    else{
        console.log("it is odd number")
    }
}
eo()


//here is start arrow funcion

let asif = (a, b) => a+b;
 console.log(asif(5,6))