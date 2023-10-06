'Use strict';
const flight= 'LH234'
const jonas={
    name:' jonas schemedtman',
    passport :5451211651
}
 const checkIn = function(flightName, passenger){
   // console.log(flightName) here is call by  value 
    passenger.name= 'Mr ' + passenger.name;
    passenger= passenger.passport;
   // console.log(passenger) printing the refrerence value
   if(passenger=== 5451211651){
    console.log(' you are elegible for check in')
   }else{
    console.log(" you are not elegible for check in ");
   }
 }
 checkIn(flight,jonas)
 