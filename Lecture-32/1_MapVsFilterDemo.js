let arr = [11,16, 18, 17, 23, 42, 11, 37];

let mres = arr.map(v => v % 2 == 1); // true, false, false, true, true, false, true, true
let fres = arr.filter(v => v % 2 == 1); // 11, 17, 23, 11, 37

console.log(mres);
console.log(fres);