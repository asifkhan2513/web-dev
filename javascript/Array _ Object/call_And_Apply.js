const lufthansa = {
  airline: "lufthansa",
  iatacode: "LH",
  booking: [],
  book(flightNum, name) {// here is calling method
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iatacode}${flightNum}`
    );
    this.booking.push({
      flight: `${name} booked a seat on ${this.airline} flight ${this.iatacode}${flightNum} ${name}`,
    });
  },
};
lufthansa.book(234, "Asif");
lufthansa.book(635, "jonas Schemadtman");
console.log(lufthansa)

const eurowings = {
  name: "Eurowings",
  iatacode: "EW",
  booking: [],
};
const book = lufthansa.book
book.call(eurowings , 23 ,'Sarah williams')
console.log(eurowings)
console.log(lufthansa)


const swiss = {
  name : 'swiss airline',
  iatacode : ' Lx',
  booking :[]
}
book.call(swiss,26,'Marry Cooper')
console.log(swiss)
 
flightData = [583,'Goerge cooper']
book.apply(swiss,flightData)
console.log(swiss)

