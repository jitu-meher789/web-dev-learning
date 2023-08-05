// reduce is a function
// it takes as input a callback
// callback has 3 params
// for the first call to reduce pv is 0th value, cv is the 1st value, ci is the index number

let arr = [10,20,30,40,50];

let val = arr.reduce(function(pv, cv, ci) {

    console.log(pv + " " + cv + " " + ci);

    return pv + cv;
})

console.log(val);

