let arr = [
    {name: "A", age : 14, gender : "M"},
    {name: "B", age : 34, gender : "M"},
    {name: "C", age : 24, gender : "F"},
    {name: "D", age : 24, gender : "F"},
    {name: "E", age : 44, gender : "M"},
    {name: "F", age : 38, gender : "F"},
    {name: "G", age : 36, gender : "M"},
    {name: "H", age : 27, gender : "F"},
];


// if every callback returns true then "Every" return true otherwise false
let isThereAnyValidCandidate = arr.filter(c => c.gender == 'F').every(fc => fc.age >= 20 && fc.age <= 30) 

console.log(isThereAnyValidCandidate);
