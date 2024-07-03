class Name{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

const Mycar = new Name("Harshal", 21)
const Mycar2 = new Name("Rohit", 24)
console.log(Mycar.name)
console.log(Mycar2.age)


// This keyword - it is used to refers to the window object
/* This variable hold the address of window object0  */

//  1 - used this keyword in object refers to the objest itself

const details = {
    name: "Harshal",
    age : 21,
    fullname: function(){
        return this.name + " " + this.age
    }
}
console.log(details.fullname())

// 2 - used this keyword alone
let num = this  // refers to the window object


// 3 used this keyword in function (default)

function Myfun(){
    return this;
}
console.log(Myfun())   // return [ object window ]


//  in evenhandling - "this" keyword refers to the HTML element that recieved the event

/* <button onclick="this.style.display = "none"> 
        Click to Remove Me
   </button>
 */