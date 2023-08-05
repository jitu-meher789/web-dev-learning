Array.prototype.myFilter = function(callback) {

    let oarr = this;
    let res = [];
    for(let i = 0; i < oarr.length; i++) {
        let v = oarr[i];
        let rbv = callback(v,i, oarr); // rbv = returned boolean value

        if(rbv == true) {
            res.push(v);
        }
    }
    return res;
}

let arr = [2,5,7,8,11,19,32,22];
let odArr = arr.myFilter((v, i , oarr) => {
    if(v % 2 == 1) {
        return true;
    }else {
        return false;
    }
})
console.log(odArr);