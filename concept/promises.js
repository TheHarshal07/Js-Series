/* Promises - It used to handle the asnychronous operation

It is an object may produce single value either resolve or reason of reject (i.e. reject)

- Promises are created with new Promise() constructor and that takes two arguments
1. resolve() - it returns when asynchronous operation suceed
2. reject() - it return when synchronous operation fail


*/


let my_promise = new Promise(function(resolve, reject){

    setTimeout(()=>{
        resolve(10/0)
    },3000)

    if(resolve){
        console.log("resolve")
    }
    else{
        console.log("Fail ")
    }
})
my_promise.then(function(value){
    console.log("Successfull")
})