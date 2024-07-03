alert("Hello")
var inpt = document.querySelector("#input")
var add = document.querySelector("#add")
var del = document.querySelector("#del")
var ul = document.querySelector("ul")

var h3 = document.querySelector("h3")
var li;
add.addEventListener("click", ()=>{

    if (inpt.value.trim() === ""){
        h3.textContent = "Please enter the task"
        h3.style.color = "red"
    }
    else{

        li = document.createElement("li")
        li.textContent = inpt.value
        ul.append(li)
        h3.textContent = ""
        inpt.value = ""
    }

})

del.addEventListener("click", ()=>{
    if(ul.lastElementChild){
        ul.removeChild(ul.lastElementChild)
    }
    else{
        h3.textContent = "No tasks to delete"
        h3.style.color = "red"
    }
})