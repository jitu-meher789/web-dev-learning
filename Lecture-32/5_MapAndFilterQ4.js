let products = [5, 83, 24, 67, 71, 12, 24, 7];


let cubes = products.map((v, i , oarr) => {
    return v * v * v;
}).filter((v, i, oarr) => {
    return v <= 10000;
})
console.log(cubes);