const sentence ="Hello how are you";

function countVowel(sentence){
   const vowel =['a','e','i','o','u'];
    let count =0;
    for(let i =0;  i<sentence.length;i++){
    const char = sentence[i].toLowerCase();
    console.log(char);
    if (vowel.includes(char)) {
        count++     
    }

    }
    return count;
}
const result = countVowel(sentence);
console.log(result)