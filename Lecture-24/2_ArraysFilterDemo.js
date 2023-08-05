let arr = [4,5,9,11,23,90];

let even = arr.filter((v, i) => {
    if(v % 2 == 0){
        return true;
    }else{
        return false;
    }
})



let odd = arr.filter((v, i) => {
    if(v % 2 != 0){
        return true;
    }else{
        return false;
    }
})

console.log(even);
console.log(odd);
