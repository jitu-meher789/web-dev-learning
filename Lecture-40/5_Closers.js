function powerCreater(obj) {
    
    let fun = function(base) {
        let val = Math.pow(base, obj.exp);
        return val;
    }
    return fun;
}






// ------------case 1 ----------------
// we cant fine cube with out call again powerCreater, to get the cube we have to call again powerCreater
// let squarer= powerCreater(2);
// let val = squarer(8);
// console.log(val);













// -------------case 2 ----------------
/*  here, suppose we have to get power of any number, 
    we dont need to call powerCreater again and again, 
    we just call it once, then we just change the exp value of fobj 
*/
let o2 = {
    exp: 2
}

let squarer = powerCreater(o2);
let val1 = squarer(7);
console.log(val1);




o2.exp = 3;
let val2 = squarer(7);
console.log(val2);