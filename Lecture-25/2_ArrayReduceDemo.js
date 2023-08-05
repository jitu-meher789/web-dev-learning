let arr = [10,20,30,40,50];

let val = arr.reduce(function(pv, cv, ci) {
    console.log(pv + "-" + cv + "_" + ci);
    return pv + cv;
},5)


console.log(val);