// //1.  functin are variable
// function outer (param){
//     console.log(param);
//     param();
// }

// function chotaFn() {
//     console.log("hello i am a chota function");
// }
// // function can be passed as a parameter to another function
// outer(chotaFn);









// 2. function's reference can be stored in another varibale, anonymous function
// let a = [1,2,3,4,5];
// let b = a;
// let anotherName = function() {
//     console.log("I am an expression");
// }
// anotherName();








//3.  function return from a function
function fn() {
    return "hello";
}
let rVal =  fn();
console.log(rVal);







// // 4.
// function outer () {
//     console.log("Hello i am outer and i am  returning inner");
//     return function inner() {
//         console.log("I am inner");
//     }
// }
// let rVal = outer();
// console.log(rVal);