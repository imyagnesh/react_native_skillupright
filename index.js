
// Hoisting
var a;

a = 1;

a = 2;

console.log(a);

// Scoping 
{
    var b = 1;
}

{
    var b = 2;
}

console.log(b);