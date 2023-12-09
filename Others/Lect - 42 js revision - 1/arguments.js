function f(x, y){
    console.log(arguments);
    return x + y;
}


// arguments is nothing but an array like object


console.log(f(2,3))
f(1,2,3);
