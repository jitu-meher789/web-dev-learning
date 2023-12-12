// it is not a part of javascript
// either from  broser or node
// Browser => browser api
// Node => node api
// is is also a timer function provided by environment

// setTimeout is only executes the given function once
// setInterval it keeps executing the given functin in cycles of the fiven period
// bothe setInterval as well as setTimeout takes time in milliseconds
// 1 second == 1000 milliseconds
let count = 1;
let id = setInterval(() => {
    console.log(`this will be printed after ${count++} seconds`);
}, 1000);

setTimeout(() => {
    clearInterval(id);
},10000);
