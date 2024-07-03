var ds1 = document.querySelector("#Mylist")
var ds2 = document.querySelector("#Mylist2")

ds2.disabled = true
var flag = 0
ds1.onchange = function()  {
    falg = 1
    if (flag = 1){
        ds1.disabled = true
        console.log("disabled")
    }
    ds2.disabled = !this.value
}
ds2.onchange = function(){
    if (flag = 1){
        ds2.disabled = true
        console.log("Drop2 selected")
    }
    ds1.disabled = false


}
