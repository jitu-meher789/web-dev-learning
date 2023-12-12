// this in nodejs with strict mode



"use strict";

// case 1
// global area (not in any object or function)
// here "this" will be empty object
// console.log(this);







// case 2
// it refers to the global object
// here "this" will be undefined
// function f() {
//     console.log(this);
// }
// f();






// case 3
// "this" refers to the  object  itself in the follwoing case
// let obj = {
//     name : "rahul",
//     f : function() {
//         console.log(this);
//     }
// }

// obj.f();









// case 4
// here "this" will be undefined
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
// context : nodejs + use strict

// 1. global area => this = {}
// 2. function in global area => this = undefined
// 3. direct function in an object => this = object itself
// 4. indirect function in an object => this = undefined






