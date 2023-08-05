// returs the cubes of values whose square <= 1000



let products = [5, 83, 24, 67, 71, 12, 24, 7];


let cubes = products.filter((v, i, oarr) => {
    if(v * v <= 1000) {
        return true;
    }
}).map((v, i, oarr) => {
    return v * v * v;
})

console.log(cubes);