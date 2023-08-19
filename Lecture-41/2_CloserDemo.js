function powerFunctionCreater(obj) {
    
    if(typeof obj.exp !== 'number'){
        console.log("exp must be a number");
        return null;
    }

    let powerFn = function(base){
        let rv = Math.pow(base, obj.exp);
        return rv;
    }
    return powerFn;
}

let obj = {
    exp : 2
}

let sqarrer = powerFunctionCreater(obj);
let sqo8 = sqarrer(8);
console.log(sqo8); 


obj.exp = 3;
let cuo8 = sqarrer(8);
console.log(cuo8);

