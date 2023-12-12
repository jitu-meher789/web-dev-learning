// "this" in browser with strict mode

"use strict";

// case 1
// global area (not in any object or function)
// here "this" will refers to browser's global object (window object)
// console.log("case 1");
// console.log(this);












// case 2
// it refers to the global object
// here "this" will refers to undefined
// function f() {
//   console.log("case 2");
//   console.log(this);
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
// here "this" will refers to undefined
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
// context : browser + use strict

// 1. global area                     => this = browser's global object (window obect)
// 2. function in global area         => this = undefined
// 3. direct function in an object    => this = object itself
// 4. indirect function in an object  => this = undefined
