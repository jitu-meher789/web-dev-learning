let arr = [
    {name: "A", age : 14, gender : "M"},
    {name: "B", age : 34, gender : "M"},
    {name: "C", age : 24, gender : "F"},
    {name: "D", age : 44, gender : "F"},
    {name: "E", age : 44, gender : "M"},
    {name: "F", age : 88, gender : "F"},
    {name: "G", age : 36, gender : "M"},
    {name: "H", age : 29, gender : "F"},
];

// sum of squares to ages of all valid 
let res1 = arr.filter((v, i) => {
    return v.gender == "F" && v.age >= 20 && v.age <= 30;
});

let res2 = res1.map((v, i) => {
    return v.age * v.age;
})

let sum = res2.reduce((pv, cv, ci) => {
    return pv + cv;
})

console.log(res1);
console.log(res2);
console.log(sum);

