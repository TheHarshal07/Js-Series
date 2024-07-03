/*
for loop in javascript:
*/
const prompt = require('prompt-sync')();

let number = prompt("Enter the value of n ")
number = Number.parseInt(number)
sum = 0
for(let i = 1; i<=number; i++){
    sum += i
}
console.log("Sum of "+ number + " natural number is "+ sum )


// For in loop =>> Javascript
const obj = {
    Harshal: 90,
    Sahil: 80,
    Rohan: 40,
    Rohit: 30
}

for (let a in obj){
    console.log("THe marks of " + a + " is " + obj[a])
}

//  for of loop ==> the object shoould be iterable 

for (let a of "Harshal"){
    console.log(a)
}

//  while loop :



marks = {
    "Harry" : 90,
    "Rohit" : 50,
    "Bhavesh" : 40
}

for (let i = 0; i<= Object.keys(marks).length; i++){
    console.log("The marks of "+ Object.keys(marks)[i] + "are" + marks[Object.keys(marks)[i]])
}