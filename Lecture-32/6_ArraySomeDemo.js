let arr = [
    {name: "A", age : 14, gender : "M"},
    {name: "B", age : 34, gender : "M"},
    {name: "C", age : 54, gender : "F"},
    {name: "D", age : 44, gender : "F"},
    {name: "E", age : 44, gender : "M"},
    {name: "F", age : 88, gender : "F"},
    {name: "G", age : 36, gender : "M"},
    {name: "H", age : 23, gender : "F"},
];


let isThereAnyValidCandidate = arr.some((v, i, oarr) => {
    if(v.gender == "F" && v.age >= 20 && v.age <= 30){
        return true;
    }else{
        return false;
    }
})

console.log(isThereAnyValidCandidate);
