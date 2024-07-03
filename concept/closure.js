/*

It is created when fucntion is defined within an another function

Closure - When a child function want to access the variable fo parent function
then a scope is created that scope is call as Closure

*/

function parent(){
    var name = "Harshal";
    function child(){
        console.log(name);
    }
    return child();
}

parent()