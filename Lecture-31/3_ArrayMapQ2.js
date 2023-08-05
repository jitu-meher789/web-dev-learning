let arr = [
    {
        gender: "M",
        age: 34
    },
    {

        gender: "F",
        age: 25
    },
    {
        gender: "M",
        age: 40
    },
    {
        gender: "F",
        age: 34
    },
    {
        gender: "F",
        age: 21
    },
    {
        gender: "M",
        age: 34
    },
    {
        gender: "M",
        age: 19
    },
    {
        gender: "F",
        age: 20
    },
    {
        gender: "M",
        age: 20
    },
    {
        gender: "F",
        age: 28
    }
];

let arrWithFemale = arr.map((v, i) => {

    // return v.gender == "F" && v.age >= 20 && v.age <= 30;

    let  obj = v;
    if(obj.gender == "F" && (obj.age >= 20 && obj.age <= 30)) {
        return true;
    }else {
        return false;
    }
});

console.log(arrWithFemale);
