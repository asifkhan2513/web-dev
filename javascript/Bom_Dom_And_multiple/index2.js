const a = document.querySelector("h1");
console.log(a);
a.innerHTML = "my name is asif  khan i am  student of mca";
a.style.alignItems = "center";
a.style.justifyContent = " center";
a.style.border = " 2px solid black";
a.style.backgroundColor = "yellow";
a.style.textTransform = "capitalize";

console.log("============");

const b = document.querySelector("p");
console.log(b);
b.style.fontSize = "x-large";
b.style.fontWeight = "900";
b.style.textDecoration = "underline overline";
b.style.border = "4px dashed red";

const c = document.querySelector("h2");
console.log(c);
c.innerHTML = " this text is generate from dom";
c.style.color = "black";
c.style.backgroundColor = "rgb(231,20,231)";
c.style.fontWeight = "900";
c.style.textTransform = "capitalize";
c.style.border = "3px dotted green";

// creating  an element using dom
let elem1 = document.createElement("h2");
elem1.innerHTML = " hello how are you !";
document.body.appendChild(elem1);
elem1.style.color = "rgb(123,123,250)";
console.log(document);
console.log(" my name is  asif khan ");

// here is going to create a paragraph
let para = document.createElement("p");
para.innerHTML = " this is paragraph";
document.body.appendChild(para);
para.style.fontWeight = "900";
para.style.textDecoration = "underline";

// child element of any element
