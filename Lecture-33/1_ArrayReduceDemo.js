// custom reduce
Array.prototype.myReduce = function(callback, iv) {
    let oarr = this;
    let pv;
    if(iv == undefined) {
        pv = oarr[0];
        for(let i = 1; i < oarr.length; i++) {
            let cv = oarr[i];
            pv = callback(pv, cv, i, oarr);
        }
    }else{
        pv = iv;
        for(let i = 0; i < oarr.length; i++) {
            let cv = oarr[i];
            pv = callback(pv, cv, i, oarr);
        }
    }
    return  pv;
}




let arr = [10,20,30,40,50,]

let sum1 = arr.myReduce((pv, cv, ci) => {
    console.log(pv + " " + cv + " " + ci);
    return pv + cv;
})
console.log(sum1);



let sum2 = arr.myReduce((pv, cv, ci, oarr) => {
    console.log(pv + " " + cv + " " + ci);
    return pv + cv;
}, 5);
console.log(sum2);