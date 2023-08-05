let arr = [20,30,40,50,60];
displayArray(arr);

arr.push(1000);
displayArray(arr);

let rv = arr.push(5000, 6000);
displayArray(arr);
console.log(rv);

function displayArray(arr) {
    console.log(arr);
}