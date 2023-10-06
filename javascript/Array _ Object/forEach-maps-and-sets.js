// for each loop for map 

const currencies = new Map([
  ["USA", "Doller"],     // country name is value = value     and currency is the name of the key 
  ["ERU", "Euro"],
  ["IND", "Rupees"],
]);
currencies.forEach(function(value, key , map){
    console.log(`${key},${value}`)
})
// for each loop for sets 
