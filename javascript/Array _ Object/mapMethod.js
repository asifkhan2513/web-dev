const  movements = [200,450,-400,3000,-650,-130,70,1300]
const  eurToUsd = 1.1;
// this is first method

/*
this is approach first

const movementUsd =  movements.map(function(mov)
{
    return mov*eurToUsd;

})
console.log(movements)
console.log(movementUsd)
console.log('----------------------------')*/




//  second method

/*
const movementUsdfor = []
for( const  mov of movements ) movementUsdfor.push(mov*eurToUsd);
console.log(movementUsdfor)
*/



// this is third method 

// this problem is solved by the arrow method 
const movementUsd =  movements.map(mov =>  mov*eurToUsd)

console.log(movementUsd)