let cities = ["Ankara", "istanbul", "Analatilia", "Bursa", "Trabzon"];

let city = "Bursa";

let match1 = cities.find((item) => {
  if (city === item) return true;
});
console.log("item match from the cities was ", match1);
