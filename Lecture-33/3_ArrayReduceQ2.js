// flatten the array

let arr2d = [[2,8,20], [34], [45,31,25,64,,72, 88],[], [25,7]];

let arr = arr2d.reduce((pv, cv, ci, oarr) => {
    let narr = pv.concat(cv);
    return narr;
},[]);


console.log(arr);