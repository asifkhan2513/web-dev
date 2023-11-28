console.log(document.body.firstChild);
console.log(document.body.childNodes);
let arr = Array.from(document.body.childNodes);
const changebgcolor = () => {
  document.body.firstElementChild.style.background = "red";
};
// changebgcolor()
