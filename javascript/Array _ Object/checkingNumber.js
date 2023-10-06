// checking value
console.log(23===23.0);
console.log(0.2+0.1)
console.log(0.2+0.1===3)
console.log("-----------")

// converting string into number
console.log('23')// this is a string value 
console.log(Number('23')) 
console.log(+'23')

console.log("-----------")
//Parsing integer value 
console.log(Number.parseInt('30px',10));// first is number and second is base of number
console.log(Number.parseInt('e20',16));
console.log(Number.parseInt('ex20')) // by defualt base 10 this would be NaN becz e is not a number type
console.log(Number.parseFloat('2.5'))
console.log(Number.parseFloat('2.5rem'))


console.log("-----------");
//The isNaN() method returns true if a value is NaN.
// checking is Nan(not a number)
console.log(Number.isNaN(20))
console.log(Number.isNaN('20'))
console.log(Number.isNaN(23/0))
console.log(isNaN('hello'))
console.log(isNaN(2005/12/12));
console.log(isNaN('123'))// this is important line bcz it is nan value and return falsee
console.log(isNaN(false))
console.log(isNaN(true))
console.log(isNaN(undefined))
console.log(isNaN('NaN'))
console.log(isNaN(NaN))

console.log('-----------');
// isFinite method 
console.log(isFinite(23))
console.log(isFinite(+'23'))
console.log(Number.isFinite('25'))
console.log(isFinite(+23))
console.log(isFinite(23/0))
console.log('--------------')
console.log(Number.isInteger(230))
console.log(Number.isInteger(23.0))
console.log(Number.isInteger(23.5))
console.log(Number.isInteger(23/0))



