let arr = [10,20,30,40,50];

let na =  arr.splice(2,3, 5000,600, 340);

displayArray(arr); // 10, 20, 5000, 600, 340
displayArray(na);  //30, 40, 50

function displayArray(arr){
    console.log(arr);
}