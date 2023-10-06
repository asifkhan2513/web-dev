const greate = function (greeting){
    return function(name){
        console.log(`${greeting} ${name}`)
    }
}
const greatingHey = greate('Hey');          //  it will be going to the main function bcz greet is the name of the function
greatingHey('jonas')                        // it will going to the return function
greatingHey('Asif')

greate ('hello') ('khan')               // short hand notation above function first will to the main and secoond will be go to the return function


//this problem will be using arrow fucntion
greaterArr = greeting=>name=>console.log(`${greeting} ${name}`)

greaterArr('Hello') ('Boss')


