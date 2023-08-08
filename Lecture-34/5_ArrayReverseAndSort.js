let sarr = ["hello", "bello", "bye", "there", "pep", "nados"];
let narr = [20, 54, 12, 33, 98, 76, 100, 11, 291, 34];


sarr.sort();
console.log(sarr);

sarr.reverse();
console.log(sarr);



narr.sort(); // it sort lexicographically
console.log(narr); 





narr.sort((a,b) => a - b); //
console.log(narr); 