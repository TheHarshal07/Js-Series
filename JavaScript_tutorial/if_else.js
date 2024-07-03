const prompt = require("prompt-sync")(); // Here I have used prompt-sync function in order to 
                                         // use prompting fucntion

let a = prompt("Enter the age ")
a = Number.parseInt(a)

if (a > 10 && a < 20){
    console.log("You're eligible")
}


// How to used switch case

switch (a){
    case 10:
        console.log(`Your age is ${a}`)
    case '20':
        console.log(`Your age is ${a}`)

}
