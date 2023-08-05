let arr = [20,30,40,50,60];
displayArray(arr);

arr[10] = 500;
displayArray(arr);

arr['kuchbhi'] = 1000;
displayArray(arr);
console.log(arr['kuchbhi']);


function displayArray(arr) {
    console.log(arr);
}