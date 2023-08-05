let arr = [
    "Summit Mallic",
    "Amit Mallik",
    "Inderjit Mallik",
    "Daya Mallik",
    "Kunal Mallik",
    "Aryan Mallik"
];

let ansArr = arr.map((v, i, oarr) =>{
    let name = v.split(" ");
    
    let fName = name[0];
    let lname = name[1];

    return fName[0] + "." + lname[0] + ".";
});

console.log(ansArr);