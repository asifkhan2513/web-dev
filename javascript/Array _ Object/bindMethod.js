/*const lufthansa = {
  airline: "lufthansa",
  iatacode: "LH",
  booking: [],
  book(flightNum, name) {
    // here is calling method
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iatacode}${flightNum}`
    );
    this.booking.push({
      flight: `${name} booked a seat on ${this.airline} flight ${this.iatacode}${flightNum} ${name}`,
    });
  },
};
 lufthansa.book(235,'Asif')
let lufthansa1 = lufthansa.book(23,).bind(lufthansa);



practce from youtube  and it is same as call and apply method
*/
const youtuber = {
  name : 'Love Babbar',
  fav_topic :'DSA',
  feature : function(){
    console.log(`${this.name} is my fav youtuber and he teach me ${this.fav_topic}`)
  }

}
youtuber.feature(); // now apllying bind method


 



