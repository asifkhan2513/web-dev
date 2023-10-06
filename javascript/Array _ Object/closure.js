const secureBooking = function(){
    let passengerCount = 0;
    return function(){
        passengerCount++;
        console.log(`${passengerCount} passenger`)
    };
}
const booking = secureBooking()
booking()
booking()
booking()
booking()
console.dir(booking)