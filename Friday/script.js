
const  strBtn = document.querySelector('#start');
const endBtn = document.querySelector('#stop');
const speakBtn = document.querySelector('#speak');
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const  recognition = new SpeechRecognition();

// sr start
recognition.onstart = function (){

    console.log("Recognition started");
}

// sr stop
recognition.onended = function (event){
 let current = event.resultIndex;
 let transcript = event.result[current][0].transcript;
 console.log(transcript);

    console.log("Recognition finished");
}


// sr continue
// recognition.continuous = true;
strBtn.addEventListener("click" , ()=>{
    recognition.onstart()
})

endBtn.addEventListener("click", ()=>{
    recognition.onended();
})


// friday speech
function readOut(message){
    const speech = new SpeechSynthesisUtterance();
    const allVoices = speechSynthesis.getVoices();

    speech.text = message;
    speech.volume = 1;
    
speech.voice = allVoices[36];
    window.speechSynthesis.speak(speech);
    console.log("speaking logout")
}
speakBtn.addEventListener("click", ()=>{   
    readOut("HEY MY NAME IS ASIF KHAN") ;
 } )
