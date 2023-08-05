
let arr = [2,5, 9, 89 , 15, 11, 6];
let odarr = arr.filter((v, i, oarr) => {
    if(v % 2 == 1) {
        return true;
    }else {
        return false;
    }
});

console.log(odarr);