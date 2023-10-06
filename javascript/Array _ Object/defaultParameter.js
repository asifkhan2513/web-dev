"use strict";

const createBooking = function (flightNum, numPassengers, price) {
  //we can define value in the parameter like flightnum = 'lh123, numpassenger = 800 i the  paranthesis
  numPassengers = numPassengers || 1; // we can also define here or we can define when we are calling function
    price = 199 * numPassengers;
  //prince = prince || 199; // we can also define here or we can define when we are calling function

  const bookings = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(bookings);
};
createBooking("LH123");
createBooking("LH123",2);// we calling value serial wise one by one we can not skip any paramenter if we want skip we need to use undifine
