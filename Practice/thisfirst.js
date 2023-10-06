// const asif = {
//     name :'aman',
//     year : 1991,
//     calAge : function(){
//         console.log(this);
//         return (2037- this.year);
//         console.log(this);
//     },
// };
// // console.log(asif.calAgecalAge);
// asif.calAge()

const jonas = {
    firstName : 'asif ',
    year: 1991,
    calAge : function (){
        console.log(this);
        console.log(2037 - this.year);

    },
    great : () => console.log('hey ${this.firstName}')
};
// jonas.calAge()