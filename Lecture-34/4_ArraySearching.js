// easy searching => indexOf, lastIndexOf, includes
// Complex searching => find, findIndex
// Complex searching and all filtered values = filter


let arr = [10, 20, 30, 40, 50, 60, 60, 50, 40, 30, 20, 10];

let ioRes = arr.indexOf(30); // firstIndex or -1
let lioRes = arr.lastIndexOf(30); // last index or -1
let iRes = arr.includes(30); // true or false



let fRes = arr.find((v, i, oarr) => {
    return v > 60; // it finds the value and returns an value or undefined according to the condition
});



let fiRes = arr.findIndex((v, i, oarr) => {
    return v > 50; // it returs an first index number or -1 according to the condition
});

console.log(fiRes);
console.log(fRes);
