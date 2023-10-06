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


// this program for  Array
const [pizza, , Risotto,...others]= [...restaurant.mainMenu,...restaurant.starterMenu]
console.log(pizza,Risotto,others);

//  this program for object

const {sat,  ...weekday}= restaurant.openHours
console.log(weekday);

// this program is for function


const add = function (...numbers){
    console.log(numbers);
    sum = 0;
    for(let i =0; i<numbers.length;i++)
    
        sum +=  numbers[i];
    
    console.log(sum);
}
add(2,3)
add(2,3,4)
add(2,3,4,5)