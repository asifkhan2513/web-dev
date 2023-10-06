const orderSet = new Set([
'apple',
'mango',
'orange',
'apple',
'mango',
]);

console.log(orderSet.size);
console.log(orderSet);
    
console.log(orderSet.has('mango'));
console.log(orderSet.add('guava'));
console.log(orderSet.has('asif'));
console.log(orderSet.delete('mango'));

//this will be convert set to object
for( const i of orderSet)  console.log(i);

const staff = ['waiter ', ' chef','waiter','manager','chef','waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);

console.log(new Set(['waiter ', ' chef','waiter','manager','chef','waiter']).size);




// console.log(orderSet);