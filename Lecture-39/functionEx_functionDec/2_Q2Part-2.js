
var fun = function() {
    gun();
}

fun();

var gun = function() {
    console.log("I am inside gun");
}
// line 6 ->  fun will execute
// line 8 ->  error  ->  gun is not a function