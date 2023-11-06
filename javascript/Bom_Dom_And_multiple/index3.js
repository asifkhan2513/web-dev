const  a = document.querySelector('h1');

a.style.textTransform = "capitalize"
a.addEventListener("click", function(){
  a.innerHTML = "this is upadate function"
  
  a.style.color="yellow"
  a.style.backgroundColor = "#000"
})


const bulb = document.getElementById('bulb')
bulb.style.height = "300px"
bulb.style.width = "300px"
bulb.style.borderRadius= "50%"
bulb.style.border= "4px solid black"
// bulb.style.backgroundColor = "yellow"

const  btn = document.querySelector('button');
 var falg = 0
btn.addEventListener("click" , function(){
 if ( falg == 0){
  bulb.style.backgroundColor= " yellow"
  console.log("bulb is currently on")
  falg = 1
 }
  else {
    bulb.style.backgroundColor= "transparent"
  console.log("bulb is going to currently off")
    falg = 0
  }
})

