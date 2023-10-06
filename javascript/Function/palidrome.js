let value =1221;
 const revValue = () => {
    let myvalues = value.toString().split("").reverse().join(""); 
    // console.log(myvalues)
    let mystrval = value.toString();
    console.log(typeof myvalues)
    console.log(typeof  mystrval)
    if (myvalues ==  mystrval) {
        console.log("palindrome")
    }
    else{
        console.log("not palindrome")
    }

 }
 revValue()