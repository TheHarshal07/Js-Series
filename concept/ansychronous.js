/* Asynchrous js - It is non-blocking architecture

so execution of one task is not depends on other. Task can run simultenously

*/

console.log("Hello")
console.log("world")

setTimeout(()=>{
    console.log("Hello")
}, 1000)

console.log("world")



function Adsync(a,b, callback){
    setTimeout(()=>{
        callback(a+b)    // callback function
    },1000)
}

Adsync(1,2 ,(result)=>{
    console.log("wait")
    console.log(result)  // Here console.log() will execute immedialty and then look for task task that are to be executed
})


function getFile(MyCallback){
    let req = new XMLHttpRequest
    req.onload = function(){
        if (req.response == 200){
            MyCallback(req.responseText)
        }
        else{
            MyCallback("error", + req.status)
        }
    }
    req.open('GET', "img_car.jpg")
    req.send()
}

console.log(getFile())