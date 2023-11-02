let a = [4, 8, 7, 9, 12, 13];

let b = a.splice(3, 0, 3);

console.log(a); //[4,8,7,9, 12,13]
console.log(b); //[4,8,7,3,9, 12,13]
