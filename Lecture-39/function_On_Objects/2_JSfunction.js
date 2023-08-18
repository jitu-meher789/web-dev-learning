function fun(a, b) {
    console.log(a + " " + b);


}

function fun2(a, b) {
    console.log(a + " " + b);
    console.log(arguments);

}

function fun3(a, b) {
    console.log(a + " " + b);
    console.log(arguments); /// argument is not an array, it is just array like
    let res = Array.from(arguments); // how to make an array
    let sq = res.map(x => x * x);
    console.log(sq);

}



// fun();
// fun(10);
// fun(10, 20);
fun3(10, 20, 30);
