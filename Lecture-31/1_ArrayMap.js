let arr = [2,5,9,8,15,11,6];

let sqrr = arr.map((v, i, oarr) => {
    console.log(v + " @ " + i + "= [" + oarr  +"]");
    return v * v;
});
console.log(sqrr);