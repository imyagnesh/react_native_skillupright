// 1. fix the older js issues
// 2. les code more output

const a = 1;

const obj = {
    a: a,
    b: 2,
    c: function () {
        return this.a + this.b;
    }
}

const objES6 = {
    a,
    b: 2,
    c() {
        return this.a  + this.b;
    }
}

console.log(objES6);

console.log(objES6.c());



console.log(obj);

console.log(obj.c());


// C -> CREATE
// R -> READ
// U -> UPDATE
// D -> DELETE

const yagnesh = {
    firstName: 'Yagnesh',
    lastName: 'Modh',
    age: 30
}

// console.log(yagnesh.firstName);
// console.log(yagnesh.lastName);
// console.log(yagnesh.age);



// mutable
// es5
// delete yagnesh.age;
// console.log(yagnesh);

// immutablly
// destructuring
const age = 40;

const {age: abc, firstName, ...other} = yagnesh;

console.log(abc);
console.log(other);

console.log(yagnesh);




// // immutable

// // es5
// const updatedUser = Object.assign({},yagnesh, { gender: 'male', age: 32 });

// // es6
// // spread operator
// const updatedUser1 = {...yagnesh, gender: 'male', age: 32 };

// // origional object
// console.log(yagnesh);
// //es5 output
// console.log(updatedUser);
// //es6 output
// console.log(updatedUser1);


// // update data mutablly



// // const updatedUser = Object.assign({}, yagnesh, { address: 'Ahmedabad' });

// // console.log(updatedUser);

// // console.log(yagnesh);



// const address = 'ahmedabad';

// // mutable
// // immutable

// // console.log(yagnesh);

// // console.log(yagnesh.firstName);
// // console.log(yagnesh.lastName);
// // console.log(yagnesh.age);
// // console.log(yagnesh.gender);



