let n = parseInt(prompt("enter any number"))
if(n<0){
    console.log(" error factorial")
}
else if (n==0){
    console.log("the is ${n} is 1")
}
else{
    fact = 1;
    for(let i = 1;i<=n;i++){
        fact*=i
    }
    console.log("the factorial of given number is = ",fact)
}