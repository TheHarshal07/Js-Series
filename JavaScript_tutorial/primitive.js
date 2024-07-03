/*
primitive data types in javascript:
shortcut - nn bb ss u
*/

let a = null;
let b = 323;
let c = BigInt('343')  // used to represent big integers with arbitrary magnitude
let d = true
let e = "Harshal"
let f = Symbol("Hello Harshal!")  // They are used to represent the unique values that can be used as identifier or key in Object 
let g = undefined

console.log(a,b,c,d,e,f,g)

/*
Objects in Javascript : IT is nothing but the dictionary which is  define as key-value pairs
 */

const Object = {
    "Harry": true,
    "Harshal": "smart",
    "Rohit" : undefined
}

console.log(Object["Harry"])


