// JSON.stringify
// it converts a js object to a string

// let o  = {
//     name : "rahul"
// }

// console.log(o);
// console.log(JSON.stringify(o));






// JSON.parse
// it converts a string which contains a js object back to a js object
let o  = {
    name : "rahul"
}



let stringWhichContainsObject = JSON.stringify(o);
console.log(stringWhichContainsObject);
let originalObject = JSON.parse(stringWhichContainsObject);
console.log(originalObject)