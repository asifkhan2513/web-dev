'use strict ';
const restaurant = {
    name : ' classico italiano',
    location : 'via angelo Tavant 23',
    categories: ['italian','Pizzaria','Vegaterian'],
    starterMenu : ['Foccacia','Bruscheta','Bread'],
    MainMenu : ['pizza','pasta','Risotta'],
    order: function(starterindex,mainindex){
        return [this.starterMenu[starterindex],this.MainMenu[mainindex]]
    }
};
const arr = [2,3,4];
const [x,y,z] = arr;
console.log(x,y,z);
console.log(arr);

let [first , , second ]= restaurant.categories;1
console.log(first,second);

// swaping variable 

[first,second]=[second,first]
console.log(first,second);
// two return value from a function
const [ starter , main] = restaurant.order(2,0); 
console.log(starter,main );


const nested = [2,4,[15,16]]
// const [ i, j]= nested;
// console.log(i,j);
// default value
const [i,m,[j,k]]= nested;
console.log(i,m,j,k);