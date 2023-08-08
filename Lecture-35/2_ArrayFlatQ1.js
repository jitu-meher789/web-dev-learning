let arr = [10, 20, [30, [50, [70, 80, 90], 60], 40], 100, [120, [150, [170, 180, 190], 160], 140, 200], 100];

let res1 = arr.flat(0); // [10, 20, [30, [50, [70, 80, 90], 60], 40], 100, [120, [150, [170, 180, 190], 160], 140, 200], 100]

let res2 = arr.flat(1); // 

let res3 = arr.flat(2);

let res4 = arr.flat(3);

let res5 = arr.flat(Infinity); // it will flat in deep level
// console.log(res1);
// console.log(res2);
// console.log(res3);
console.log(res4);
