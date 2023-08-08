let str = "My name is Sumeet Malik. I am a software developer. I believe in learing by doing. I need courage and patience.";
// "Malik Sumeet is name My. developer software a am I. doing by learing in believe I. patience and courage need I."


let res1 = str.split(".");
console.log(res1);


let res2 = res1.filter(v => v.length > 0);
console.log(res2); 


let res3 = res2.map(v => v.trim());
console.log(res3);



let res4 = res3.map(s => s.split(" "));
console.log(res4);



res4.forEach(function(a) {
    a.reverse();
})
console.log(res4);



let res5 = res4.map(v => v.join(" "));
console.log(res5);


let res6 = res5.map(v => v + ".");
console.log(res6);



let res7 = res6.reduce((pv, cv, ci) => {
    return pv + " " + cv;
})

console.log(res7);