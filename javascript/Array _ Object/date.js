/*
new Date()
new Date(date string)
new Date(year,month)
new Date(year,month,day)
new Date(year,month,day,hours)
new Date(year,month,day,hours,minutes)
new Date(year,month,day,hours,minutes,seconds)
new Date(year,month,day,hours,minutes,seconds,ms)
new Date(milliseconds)
*/

console.log('-------------------')
// these all are basic method to achive date
const now = new Date()
const  options = {
    hour:'numric',
    minut: 'numeric',
    day:'numeric,',
    month:'long',
    year:'numeric'
}
const internationa = new Intl.DateTimeFormat('ar-SY',options).format(now) // iso labguage table 

console.log(internationa)
console.log(now)
console.log(now.getDate())
console.log(now.getTime())
console.log(now.getMonth())
console.log(now.getFullYear())
console.log(2020,10,12)
console.log(now.getUTCDate())
console.log(now.getTimezoneOffset())
console.log(now.toISOString())

// Adding date on many opration on array

setTimeout(() => console.log('here is your pizza') , 3000);





