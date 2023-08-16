fun();

function fun() {
    console.log("Inside fun");
    gun();
}

var gun = function() {
    console.log("I am inside gun");
}

//line 5 - >  error -> gun is not a function