const  movements1 = ["jonas","zack","Adam","martha"]
console.log(movements1.sort())




const  movements = [200,450,400,-450,-650,-130,3000]
console.log(movements.sort()) // here is sorting number based on the 0 - 9
 

// assending order 
movements.sort((a,b) =>{
    if(a>b)
    return 1;
    if(b>a)
    return -1;
})
console.log(movements)

// desecnding order 
movements.sort((a,b)=>{
    if(a>b)
    return -1;
    if(b>a)
    return 1;
})
console.log(movements)


// with arrow function  assending order 
movements.sort((a,b)=>a-b)
console.log(movements)


// with arrow function in descending order
movements.sort((a,b)=>b-a)
console.log(movements)

