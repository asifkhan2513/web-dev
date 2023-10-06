let a = prompt("enter first number")
a = Number.parseInt(a)
let b = prompt("enter second number")
b = Number.parseInt(b)
let c = prompt("enter third number")
c = Number.parseInt(c)
if (a>b  && a>c) {
    console.log("first number is large")
}
else if (b>a && b>c){
    console.log("second number is large")
}
else{
    console.log("last number is large")
}