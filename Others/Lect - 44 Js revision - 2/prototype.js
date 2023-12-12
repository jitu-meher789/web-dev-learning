// to create a custom array prototype
// Array.prototype.myFunction = function () {
//     console.log(this);
// }

// let a = [1,2,3,4,5];
// a.myFunction();


Array.prototype.myMap = function(callback) {
    let arr = [];

    for(let i = 0; i < this.length; i++) {
        let val = this[i];

        let rv = callback(val, i, this);
        arr.push(rv);
    }

    return arr;

}


let arr = [5,6,7,8,9,4];

let newArr = arr.myMap(function(v, i, arr) {
    if(v % 2 == 0){
        return v * 2;
    }
    return v;
})
console.log(newArr);