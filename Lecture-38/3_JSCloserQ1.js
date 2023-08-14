// Q1
// ---------------
// 3, 3,3 -> wit var variable but it will print 3, 3,3
// function outer() {
//     var arr = [];
//     for(var i = 0; i < 3; i++) {
//         arr.push(function() {
//             console.log(i);
//         })
//     }
//     return arr;
// }







// Q2
// it will print 0, 1, 2 without using let 
// -----------------
function outer() {
    var arr = [];
    for(var i = 0; i < 3; i++) {
        function outer() {
            var j = i;
            return function() {
                console.log(j);
            }
        }
        arr.push(outer());
    }
    return arr;
}



console.log("before calling outer");
var arr = outer();
arr[0]();
arr[1]();
arr[2]();

console.log('after calling outer');