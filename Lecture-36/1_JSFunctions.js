// function defination
function sayHello (name) {
    console.log('Hello', name);
}


// function invocation  -> this line actual runs that code
sayHello("jitu meher");


// haven't called the function -> this line just print the function name
// console.log(sayHello);



// -------------------------------------
let rVal = sayHello("jitu");
console.log(rVal);// this line print undefined because sayHello function returns nothing