/*

typeof - used to check the type od the data


*/

let number  = 32

let checkType = Number(number)

console.log(typeof checkType);

let age = null   // null is an object
console.log(typeof age)


let num = "32abc"
num = null        // Number conversion will give - 0
num = true        // Number conversion will give (true) - 1 and (false) - 0 
let variableNumber = Number(num)
console.log(typeof variableNumber)  // number
console.log(variableNumber)    // Not a number - NaN

// 33 ==> 33
// "33" ==> 33
// "33abc" ==> NaN
// null == > 0
// true ==> 1; false ==> 0