// redclare, reassign, function scope
// you can access a var variable before initialization
// console.log(a);
// var a;
// a = 10;
// var a;
// console.log(a);









// you cannot access let variable before initialization
// let is a block scope --> this is block{}
// cannot redeclare

console.log(a); // this line throw an error
let a = 10;
console.log(a);