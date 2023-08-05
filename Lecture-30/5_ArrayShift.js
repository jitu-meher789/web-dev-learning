let arr = [20,30,40,50,60];
displayArray(arr);


arr.shift();
displayArray(arr);


let rv = arr.shift();
displayArray(arr);
console.log(rv);


function displayArray(arr) {
    console.log(arr);
}