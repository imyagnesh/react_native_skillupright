const users = [
    {
        name: 'yagnesh',
        age: 30
    },
    {
        name: 'rohit',
        age: 28
    },
    {
        name: 'virat',
        age: 32
    },
    {
        name: 'rishabh',
        age: 25
    }
];

const arr1 = users.slice(0, 2);
console.log(arr1);
const arr2 = users.slice(3);
console.log(arr2);

const updatedUser1 = [
    ...arr1,
    ...arr2
]

console.log(updatedUser1);

// C -> CREATE
// R -> READ
// U -> UPDATE 
// D -> DELETE

// immutable
const updatedUsers = [{ name: 'shikhar', age: 29}, ...users];

console.log(updatedUsers);


// mutable
// users.push({ name: 'shikhar', age: 29})
// users.pop();
// users.unshift({ name: 'shikhar', age: 29})
// users.shift()

console.log(users);

const [a, b, ...rest] = users;
console.log(a);

console.log(rest);






