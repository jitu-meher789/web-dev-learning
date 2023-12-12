// this in nodejs without strict mode

// case 1
// global area (not in any object or function)
// empty object
// console.log(this);

// case 2
// it refers to the global object
// in nodejs a global object exist
// function f() {
//     console.log(this);
// }
// f();

// case 3
// "this" refers to the same object in the follwoing case
// let obj = {
//     name : "rahul",
//     f : function() {
//         console.log(this);
//     }
// }

// obj.f();

// case 4
// it refers to the global object

// let obj = {
//     name : "rahul",
//     f : function() {
//         function g() {
//             console.log(this);
//         }
//         g();
//     }
// }

// obj.f();

// summary
// context : nodejs + non strict

// 1. global area => this = {}
// 2. function in global area => this = global object
// 3. direct function in an object => this = object itself
// 4. indirect function in an object => this = global object
