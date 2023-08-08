 //  Intersection of two arrays

//  let a1 = [10,30, 50,70,90];
//  let a2 = [63, 34, 50, 90, 80, 10, 60];

//  let inter1 = a1.filter(v => a2.includes(v));
//  console.log(inter1);









// inter section of 2d arrray
let arr2d = [
    [10, 50, 70, 80, 90, 100, 30, 60],
    [11, 50, 75, 85, 90, 100, 34, 60],
    [10, 51, 70, 80, 90, 100, 30, 60],
    [11, 50, 75, 85, 92, 100, 34, 60],
    [10, 50, 70, 80, 90, 100, 30, 60], 
];

let inter2 = arr2d.reduce((pv, cv, ci) => {
    console.log(pv + ' ******* ' + cv);
    let inter = pv.filter(v => cv.includes(v));
    console.log(inter);
    return inter;
})
