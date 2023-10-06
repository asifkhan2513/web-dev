//this is practice first
/*const map = new Map([
    ["apple",500],
    ["mango",400],
    ["banana",600]
]);
map.set("orange", 200);
const c = map;
console.log(map);
console.log(c.get("orange"));
console.log(map.has("orange"));
console.log(map.entries());
console.log(map.keys());
console.log(map.values());
console.log(map.size);
console.log(typeof map);
*/

// practice from Udemy;


const rest= new Map();
rest.set('name',"cassino italian");
rest.set(1,' frenzies, italiane');
rest.set(2,'Lisbon , portugal');
rest.set('categories',['italiane','pizarro','vegetarian','organic']);
rest.set('open',11);
rest.set("close",23);
rest.set(true,'we are open : D');
rest.set(false,'we Are closed');
console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.has('categories'));


// console.log(rest);