
// function defination
function fn() {
    console.log("I am function defination");
}

fn();



//function expression or anonymous function
let secondName = function() {
    console.log("I am expression or anonymous function");
}
secondName();






// Immidietly invoked function expression (IIFEE)
console.log("Before...");
(function drawBoard() {
    console.log("board is immedietly drawn");
})();  
console.log("After");