// count all primes using reduce

let arr = [51, 23, 37, 44, 73, 82, 97, 45];



let allPrimesCount = arr.reduce((pv, cv, ci, oarr) => {

    let flag = true;
    for(let i = 2; i * i <= cv; i++) {
        if(cv % i == 0){
            flag = false;
            break;
        }
    }
    
    if(flag == true) {
        return pv + 1;
    }else{
        return pv;
    }
},0)

console.log(allPrimesCount);