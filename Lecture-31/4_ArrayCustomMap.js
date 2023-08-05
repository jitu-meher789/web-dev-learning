Array.prototype.myMap = function(callback) {
    let res = [];
    
    for(let i = 0; i < this.length; i++) {
        let val = this[i];
        
        let rv = callback(val, i, this);
        res.push(rv);
    }
    return res;
}




// let arr = [2,5,9,8,15,11,6];
// let sqarr = arr.myMap((v,i, oarr) => {
//     return v * v;
// })
// console.log(sqarr);






let narr = [
    "Summit Mallic",
    "Amit Mallik",
    "Inderjit Mallik",
    "Daya Mallik",
    "Kunal Mallik",
    "Aryan Mallik"
];
let ansArr = narr.myMap((v, i, oarr) =>{
    let name = v.split(" ");
    
    let fName = name[0];
    let lname = name[1];

    return fName[0] + "." + lname[0] + ".";
}) ;
console.log(ansArr);