let a = prompt("Enter any year name ")
a = Number.parseInt(a)
if (a%4==0 || a%100) {
        console.log("its is leap year")
} else {
    console.log("its is not leap year")
}