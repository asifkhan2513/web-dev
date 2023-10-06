function calAge(birthyear){
    const  age = 2037-birthyear;
    console.log(firstName);
    function printAge(){
        const output= '${firstName}, you are ${age}, born in ${birthyear}';
        console.log(output);
        if(birthyear>= 1981 && birthyear<= 1991){
            var millenial = true ;
            const str = ' oh you are millenial ' 
            console.log(millenial);
        }
        // console.log(str);
        console.log(millenial);
    }  
    printAge();
    return age ;

}
const firstName='asif';
calAge(1991);
// console.log(age);
// printAge()