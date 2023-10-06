'use strict'

const restaurant = {
    name : ' classics italiane',
    location : 'via angelo Taranto 23',
    categories: ['italian','Pizzeria','Vegetarian'],
    starterMenu : ['Focaccia','Brunched','Bread'],
    mainMenu : ['pizza','pasta','Risotto'],
    openHours: {
        thu: {
            open : 12,
            close : 22,        
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open : 0,
            close:23,
        },
    }

};
const {name ,openHours,categories}= restaurant;
console.log(name, openHours,categories);

// default value

const {
    name : restaurantName,
    openHours:openh,
    categories:tags,


} = restaurant
console.log(restaurantName,openh,tags)


// mutual variable
// let a = 100;
// let b= 999;
// const obj = {a:23,b:7,c:14}
// ({a,b} = obj);
// console.log(a,b);

// nested object 

const {fri:{open : o,close : c}}= openHours;
console.log(o,c);
