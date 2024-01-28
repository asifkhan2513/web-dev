const colors = ["red", "green", "rgb(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector("color");
console.log(document.body);

btn.addEventListener("click", function () {
  const randomNumber = getRandomNumber();
  console.log("i am here");
  document.body.style.backgroundColor = colors[randomNumber];

  // color.style.backgroundColor = "red";
  console.log("i am reached here");
});
function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
