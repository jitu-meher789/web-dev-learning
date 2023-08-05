// custom find
Array.prototype.myFind = function(callback) {
    let oarr = this;

    for(let i = 0; i < oarr.length; i++) {
        let v = oarr[i];

        let rv = callback(v, i, oarr);

        if(rv == true) {
            return v;
        }
    }
    return undefined;
}



let arr = [
    {name: "A", age : 14, gender : "M"},
    {name: "B", age : 34, gender : "M"},
    {name: "C", age : 24, gender : "F"},
    {name: "D", age : 64, gender : "F"},
    {name: "E", age : 44, gender : "M"},
    {name: "F", age : 78, gender : "F"},
    {name: "G", age : 36, gender : "M"},
    {name: "H", age : 77, gender : "F"},
];


let fvc = arr.myFind((v, i, oarr) => {
    if(v.gender == "F" && v.age >= 20 && v.age <= 30) {
        return true;
    }else {
        return false;
    }
})

if(fvc != undefined) {
    console.log(fvc);
}else{
    console.log(undefined);
}