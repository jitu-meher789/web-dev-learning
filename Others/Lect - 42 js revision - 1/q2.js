// add or multiply

function multiplyAndAdd(flag) {
    let ans = 0;
    
    if(flag === 'a'){

        for(let x = 1; x < arguments.length; x++) {
            ans += arguments[x];
        }
    }else if (flag === 'm') {
        ans = 1;
        for(let x = 1; x < arguments.length; x++) {
            ans *= arguments[x];
        }
    }

    return ans;
}

console.log(multiplyAndAdd('m', 1,2,3,4));