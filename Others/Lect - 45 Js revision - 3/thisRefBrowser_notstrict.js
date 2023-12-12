// "this" in browser without strict mode



// case 1
// global area (not in any object or function)
// here "this" will refers to browser's global object (window object)
// console.log(this);







// case 2
// it refers to the global object
// here "this" will refers to browser's global object (window object)
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
// here "this" will refers to browser's global object (window object)
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
// context : browser + non strict

// 1. global area => this = browser's global object (window obect)
// 2. function in global area => browser's global object (window obect)
// 3. direct function in an object => this = object itself
// 4. indirect function in an object => this = browser's global object (window obect)

// case 2 case 4 behaves same