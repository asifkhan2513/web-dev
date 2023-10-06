// this will be execute on web browser

let  users={
    student:{
        name :'',
        age : 0
    }
}
console.log(users.student.name ??'unknown');
console.log(users.student.age ?? ' 21');

