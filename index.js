// fix scoping and hoisting

{
    let b = 1;

    console.log(b);
}

{
    let b =  2;

    console.log(b);
}


let c = 2;

c = 'string';

console.log(c);



const pi = 3.14;
pi = 4;

console.log(4);

//          reassing   redeclare  scoping
// let        tre        false     false

// const      false      false     false

// var         true       true      true

const a = {
    a: 1,
    b: 2
}

const arr = [1,2,3];

arr.push(4);

console.log(arr);



a.b = 3;



console.log(a);

