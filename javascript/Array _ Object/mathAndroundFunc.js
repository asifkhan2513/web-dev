// square and cube of  a number
console.log(Math.sqrt(25));
console.log(25 ** (1 / 2));
console.log(Math.cbrt(81));
console.log(27 ** (1 / 3));
// pow method in js 
console.log('-----------')
console.log(Math.pow(7, 3));
console.log(Math.pow(4, 0.5));
console.log(Math.pow(7, -2));
console.log(Math.pow(-7, 0.5));



console.log('---------------')
// the remender operator  %
console.log(13 % 5);
console.log(-13 % 5);
console.log(4 % 2);
console.log(-4 % 2);

// pracrtice of remender is 
const isEven = n => n%2===0
console.log(isEven(8))
console.log(isEven(23));

console.log("--------------");
//truc and random etc
console.log(Math.trunc(23.8)); // truc method will be remove decimal value
console.log(Math.max(25, 26, 21, 99, 78, 64, 35));
console.log(Math.max(35, "89", 45, 56));
console.log(Math.max("56rem", 50, 41, 10));
console.log(Math.min(12, 65, 48, 95, 32));
console.log(Math.min(23, 56, 45, 10, "5"));
console.log(Math.min(23, 56, 41, "5rem"));
console.log(Math.PI);
console.log(Math.trunc(Math.PI));
console.log(Math.random());
console.log(Math.trunc(Math.random() * 9 + 1));
console.log("---------------");

//Math round function
console.log(Math.round(2.4));
console.log(Math.round(-3.6));

console.log("-----------");

//Math absulte method
console.log(Math.abs(2.6));
console.log(Math.abs(-2600));
console.log(Math.abs("Hello"));
console.log(Math.abs(2 - 3));
console.log(Math.abs(null));
console.log(Math.abs(""));
console.log(Math.abs([1, 2])); // NaN
console.log(Math.abs([])); // zero
console.log(Math.abs({}));
console.log(Math.abs());

// Math ciel method it is return a upcoming round value
console.log("----------");
console.log(Math.ceil(23.3));
console.log(Math.ceil(23.9));
console.log(Math.ceil(7.004));
console.log(Math.ceil(-7.004));
console.log(Math.ceil(0.95));
console.log(Math.ceil(-0.95));
console.log(Math.ceil(-Infinity));
console.log(Math.ceil(Infinity));

console.log("---------------");
//The Math.floor() static method always rounds down and returns the largest integer less than or equal to a given number
console.log(Math.floor(23.3))
console.log(Math.floor(23.9))
console.log(Math.floor(7.004))
console.log(Math.floor(-7.004))
console.log(Math.floor(-Infinity))
console.log(Math.floor(Infinity))
console.log(Math.floor(0))
console.log(Math.floor(-0))




// practice in the term of the function
// difference between two number in abs form

console.log("-----------");

function difference(a, b) {
  return Math.abs(a - b);
}
console.log(
  difference(Math.trunc(Math.random() * 9), Math.trunc(Math.random() * 9))
);

// area of circle
function area(r) {
  return Math.trunc(Math.PI * r ** 2);
}
console.log(area(10));

console.log("----------------------");




// find a random number between two range
const randomInt = (min, max) =>
  Math.trunc(Math.random() * (max - min) + 1) + min;
console.log(randomInt(10, 20));


// practice from mdn reference
/**
 * Adjusts a number to the specified digit.
 *
 * @param {"round" | "floor" | "ceil"} type The type of adjustment.
 * @param {number} value The number.
 * @param {number} exp The exponent (the 10 logarithm of the adjustment base).
 * @returns {number} The adjusted value.
 */
function decimalAdjust(type, value, exp) {
  type = String(type);
  if (!["round", "floor", "ceil"].includes(type)) {
    throw new TypeError(
      "The type of decimal adjustment must be one of 'round', 'floor', or 'ceil'.",
    );
  }
  exp = Number(exp);
  value = Number(value);
  if (exp % 1 !== 0 || Number.isNaN(value)) {
    return NaN;
  } else if (exp === 0) {
    return Math[type](value);
  }
  const [magnitude, exponent = 0] = value.toString().split("e");
  const adjustedValue = Math[type](`${magnitude}e${exponent - exp}`);
  // Shift back
  const [newMagnitude, newExponent = 0] = adjustedValue.toString().split("e");
  return Number(`${newMagnitude}e${+newExponent + exp}`);
}

// Decimal round
const round10 = (value, exp) => decimalAdjust("round", value, exp);
// Decimal floor
const floor10 = (value, exp) => decimalAdjust("floor", value, exp);
// Decimal ceil
const ceil10 = (value, exp) => decimalAdjust("ceil", value, exp);

// Round
round10(55.55, -1); // 55.6
round10(55.549, -1); // 55.5
round10(55, 1); // 60
round10(54.9, 1); // 50
round10(-55.55, -1); // -55.5
round10(-55.551, -1); // -55.6
round10(-55, 1); // -50
round10(-55.1, 1); // -60
// Floor
floor10(55.59, -1); // 55.5
floor10(59, 1); // 50
floor10(-55.51, -1); // -55.6
floor10(-51, 1); // -60
// Ceil
ceil10(55.51, -1); // 55.6
ceil10(51, 1); // 60
ceil10(-55.59, -1); // -55.5
ceil10(-59, 1); // -50

