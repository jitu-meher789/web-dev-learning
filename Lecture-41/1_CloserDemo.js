function powerFunctionCreater(exp) {
    
    if(typeof exp !== 'number'){
        console.log("exp must be a number");
        return null;
    }

    let powerFn = function(base){
        let rv = Math.pow(base, exp);
        return rv;
    }
    return powerFn;
}

let sqarrer = powerFunctionCreater(2);
let sqo8 = sqarrer(8);
console.log(sqo8); 


// inner function makes a closer on the varibales  of outer functions
// which uses the inner body