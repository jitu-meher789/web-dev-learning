
function fn(param) {
    console.log("I am function defination " , param);
    param(); 
}


// fn("hello"); // string value
// fn(true); // boolean value
// fn({name:"Jiut"}); // object
// fn([12, 30, 45]); // array 






// functions are also variables -> functions are first citizens in js
function chhotaFn () {
    console.log("Hello i am a chhota function");
} 

// function can also be passed as an argument in a function
fn(chhotaFn);