Array.prototype.mySome = function(callback) {
    let oarr = this;
    let ans = false;
    for(let i = 0; i < oarr.length; i++) {
        let val = oarr[i];
        let rv = callback(val, i, oarr);

        if(rv == true) {
            ans = true;
            break;
        }
    }

    return  ans;
}



let arr = [
    {name: "A", age : 14, gender : "M"},
    {name: "B", age : 34, gender : "M"},
    {name: "C", age : 54, gender : "F"},
    {name: "D", age : 24, gender : "F"},
    {name: "E", age : 44, gender : "M"},
    {name: "F", age : 88, gender : "F"},
    {name: "G", age : 86, gender : "M"},
    {name: "H", age : 47, gender : "F"},
];

let isThereAnyValidCandidate = arr.mySome((v, i, oarr) => {
    if(v.gender == "F" && v.age >= 20 && v.age <= 30){
        return true;
    }else{
        return false;
    }
})

console.log(isThereAnyValidCandidate);
