function fn () {
    console.log("Before declaration 1 " + a);

    var a;

    console.log("After declaration 2 " + a);

    a = 20;

    if(true) {
        var a = 30;
        console.log("3 " + a);
    }
    console.log("After initialization 4 "+ a);
}
fn();

// var is a function scope
// let is a block scope