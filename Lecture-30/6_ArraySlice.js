let arr = [10,20,30,40,50];

let na1 = arr.slice(1,4); // from 1 to 3 (4 not included)
displayArray(na1);


let na2 = arr.slice(1); // from 1 to end
displayArray(na2);



let na3 = arr.slice(); // the entire array (can be used for cloning)
displayArray(na3);



let na4 = arr.slice(-3, -1); // form -3 position to -2 position (-1 not included)
displayArray(na4);


let na5 = arr.slice(1, -2);  // 1 t0 -3 (-2 not included)
displayArray(na5);


function displayArray(arr ){
    console.log(arr);
}