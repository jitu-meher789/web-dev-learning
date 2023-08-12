
var a;
function fn () {
    console.log("Before declaration 1 " + a); // this line throw an error becuarse "a" is defined

    let a;

    console.log("After declaration 2 " + a);

    a = 20;

    if(true) {
        let a = 30;
        console.log("3 " + a);
    }
    console.log("After initialization 4 "+ a);
}
a = 10;
fn();
