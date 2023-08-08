// union of array
//  let a1 = [10, 50, 70, 80, 90, 100, 30, 60];
//  let a2 = [11, 50, 75, 85, 90, 100, 34, 60];


//  let a2ma1 = a2.filter(v => a1.includes(v) == false);
//  let union = a1.concat(a2ma1);
//  console.log(union);









// union of 2darray
let arr2d = [
    [10, 50, 70, 80, 90, 100, 30, 60],
    [11, 50, 75, 85, 90, 100, 34, 60],
    [10, 51, 70, 80, 90, 100, 30, 60],
    [11, 50, 75, 85, 92, 100, 34, 60],
    [10, 50, 70, 80, 90, 100, 30, 60], 
];

let inter2 = arr2d.reduce((pv, cv, ci, oarr) => {
    
    let cvmpv = cv.filter(v => pv.includes(v) == false)
    
    let union = pv.concat(cvmpv);
    
    return union;
});

console.log(inter2);