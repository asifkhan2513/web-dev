let count = 0;
const value = document.querySelector("#value"); 
const btns = document.querySelectorAll('.btn'); 
btns.forEach(function(btn){
  // console.log(btn)
  btn.addEventListener('click',function(e){
    const style = e.currentTarget.classList;
    console.log(style)
    if(style.contains('decrease')){
      count--;
    }
    else if(style.contains('increase')){
      count++;

    }
    else{
      count = 0
    }
    if(count <5){
      value.style.color = "green"
    }
    else if (count < 0){
      value.style.color = "red"
    }
    else if(count > 6){
      value.style.color ="pink"
    }
    else{
      value.style.color = "black"
    }
    if(count ===5){
      prompt("your testing is complete")
    }
    value.textContent = count;
  })
})