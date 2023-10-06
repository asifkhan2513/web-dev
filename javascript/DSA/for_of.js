const restaurant = {
    name : ' classico italiano',
    location : 'via angelo Tavant 23',
    categories: ['italian','Pizzaria','Vegaterian'],
    starterMenu : ['Foccacia','Bruscheta','Bread'],
    mainMenu : ['pizza','pasta','Risotta'],
    order: function(starterindex,mainindex){
        return [this.starterMenu[starterindex],this.MainMenu[mainindex]]
    }
};
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for(const items of menu )
console.log(items)
for(const items of menu.entries()){
    console.log(items);
}
for(const items of menu.entries()){
    console.log( `${items[0]+1}: ${items}`);
}