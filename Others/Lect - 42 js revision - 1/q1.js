// write a functin which takes n no. as an argument and returns their sum

function getSum() {
    let sum = 0;

    // for(let i = 0; i < arguments.length; i++) {
    //     sum += arguments[i];
    // }

    for(let x in arguments) {
        sum += arguments[x];
    }
    return sum;
}

console.log(getSum(1,2,3,4,5,6,7));