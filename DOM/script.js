/*
DOM - Document Object model
=> Four pillers in DOM

1. selecting an element in HTML
2. changing HTML
3. Changing CSS  - attribute in CSS always be in camel case
4. Event handling


setInterval - It execute the code repeditly for specific interval
setTimeOut - It executes the code only after the specied delay


*/
// Task 1 - 
var btn = document.querySelector("button")
var bulb = document.querySelector(".bulb")

var flag = 0
btn.addEventListener("click", function(){
    if (flag == 0){
        bulb.style.backgroundColor = "red"
        btn.innerHTML = "Turn off"
        flag = 1
    }
    else{
        bulb.style.backgroundColor = "#fff"
        btn.innerHTML = "Turn on"
        flag = 0
    }
})


//  Task  - 2 Take inputs from the user and perform validation on the each field

var form = document.querySelector("form")
var subt = document.querySelector("#sbtn")

var user = document.querySelector("#user")
var passw = document.querySelector("#pass")
var err = document.querySelector("h4")

form.addEventListener("submit", (event)=>{
    console.log(event)
    event.preventDefault() // used to stop sending data to the server
    if(user.value.trim() === "" || (passw.value.trim())===""){
        err.textContent = "Please enter the all details"
        err.style.color = "red"
    }
    else{
        err.textContent = "Details Submitted"
        err.style.color = "green"

    }
})

// Task 3 - To add the element in the list

let product = document.querySelector("#txt")
let add = document.querySelector("#add")
let del = document.querySelector("#del")
var h5 = document.querySelector("h5")

var ul = document.querySelector("ul")
var li;


add.addEventListener("click", (event)=>{

    if (product.value.trim() === ""){
        h5.textContent = "Please enter the details"
        h5.style.color = "red" 
        
    }
    else{
        li = document.createElement("li")
        li.textContent = product.value
        ul.append(li)
        h5.textContent = ""
        product.value = ""
    }

})

del.addEventListener("click", (event)=>{
    ul.removeChild(li)
})
//  Task - 4  To creat a start and stop button 

let start =  document.querySelector("#start")
let stop =  document.querySelector("#stop")

let h1 = document.querySelector("h1")


var int;
start.addEventListener("click", ()=>{
    var count = 0;
    int = setInterval(()=>{
        h1.textContent = count;
        count ++
    },1000)
})

stop.addEventListener("click", ()=>{
    clearInterval(int);
})


