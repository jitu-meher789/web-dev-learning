Array.prototype.myFlat = function(td) {
    let oarr = this;
    let res = [];
    customFlat(oarr,td, res);
    return res;
}
function customFlat(node, td, res) {
    if(Array.isArray(node)) {
        if(td > 0) {
            for(let i = 0; i < node.length; i++) {
                customFlat(node[i], td-1, res);
            }
        }else{
            for(let i = 0; i < node.length; i++) {
                res.push(node[i]);
            }
        }
        
    }else{
        res.push(node);
    }
}
let arr = [10, 20, [30, [50, [70, 80, 90], 60], 40], 100, [120, [150, [170, 180, 190], 160], 140, 200], 100];

// let res1 = arr.flat(0); // [10, 20, [30, [50, [70, 80, 90], 60], 40], 100, [120, [150, [170, 180, 190], 160], 140, 200], 100]
// let res2 = arr.myFlat(0);

let res2 = arr.flat(1); // [10,20,30, [ 50, [ 70, 80, 90 ], 60], 40, 100, 120, [ 150, [ 170, 180, 190 ], 160],140, 200, 100]
let res3 = arr.myFlat(1);
// let res3 = arr.flat(2); // [10, 20, 30, 50, [70, 80, 90 ], 60, 40, 100, 120, 150, [ 170, 180, 190], 160, 140, 200, 100]

// let res4 = arr.flat(3); // [10,  20,  30,  50,  70,  80, 90,  60,  40, 100, 120, 150, 170, 180, 190, 160, 140, 200, 100]

// let res5 = arr.flat(Infinity); // it will flat in deep level => [10,  20,  30,  50,  70,  80, 90,  60,  40, 100, 120, 150, 170, 180, 190, 160, 140, 200, 100]

console.log(res2);
console.log(res3);

