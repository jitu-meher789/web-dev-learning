
// way 1
let arr1 = [10, 20, 30, 40];
console.log(arr1);




// way 2
let arr2 = Array.of(10);
console.log(arr2);




// way 3
let arr3 = Array.of(10, 20, 30, 40);
console.log(arr3);




// way 4
let arr4 = Array.from("sumeet"); // array like objects (for instance string, nodelist )
console.log(arr4);




// sumeet --> tvnffu
let arr5 = arr4.map(v => v.charCodeAt(0) + 1);
console.log(arr5);

let arr6 = arr5.map(ch => String.fromCharCode(ch));
console.log(arr6);