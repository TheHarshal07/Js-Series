/*
variables: let, const and var

1. var - function scope ( redeclare, reinitialize )
2. const - block scope (cannot redclare, reinitialize )
3. let - block scope (cannot redclare, but can reinitialize )
*/

let number = 10
const names = "Harshal"
var age = 20
s = 100
var d;

// reinitializing
number = 20
// names = "Rohit" // It will give me an error
age = 30

/*
Prefer not to use var
bc of issue in block and functional scope
*/

console.log(number);
console.log(names);
console.log(age);
console.log(s)
console.log(d)