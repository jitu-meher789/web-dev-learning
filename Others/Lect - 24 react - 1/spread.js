// let a = [1,2];

// let b = [3,4];

// let c = [a,b];

// let d = [...a,...b];

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);











let o1 = {
    key1 : 1,
    key2 : 2
};

let o2 = {
    key3 : 3,
    key4 : 4,
    ...o1,
};

let o3 = {
    ...o1,
    ...o2
}

console.log(o1);
console.log(o2);

console.log(o3);
console.log(o4);