console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.MIN_SAFE_INTEGER)
console.log(2 **53 +1);
console.log(2 **53 +2);
console.log(2 **53 +3);
console.log(2 **53 +4);

console.log('---------------------')
//// bigInt method
console.log(654654651849843548984135184843513518498944821)
console.log(654654651849843548984135184843513518498944821n)
console.log(BigInt(654654651849843548984135184843513518498944821))
console.log(100000n +100000n)
const huge = 654654651849843548984135184843513518498944821n
const  mul = 23
//console.log(huge *mul) // this line will be not run
console.log(huge* BigInt(mul))
console.log(20n > 15)
console.log(20n===20)  // this imp line 
console.log(20n == 20)
console.log(typeof 20n)
console.log(20n == '20')


