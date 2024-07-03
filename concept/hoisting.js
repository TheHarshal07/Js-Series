// Here we will learn the concept of Hoisting in javascript
/* Hoisting - Defalut behavior of moving all decalartion (variable, method, function) to the top
    thier scope - all before code execution
*/

//Hoisting for variables
console.log(a)   // undefined
var a = 10

b = 20
console.log(b)   // 20


//Hoisting for funtions

add()
function add(){
    console.log("Hello")
}


// Temporal dead zone

console.log(a)
let a = 10
console.log(a)
//  Here variable a is temporal dead zone bcz js knows the existence of a (its decalartion are hoisted)
//  but it is not accessible ( it doesen't have initialization)