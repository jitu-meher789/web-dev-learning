// function fn(param1, param2) {
//     console.log("Inside fn ", param1, param2);
// }


// // if something is missing at the fnc invocation -> bydefault -> it is undefined

// fn("hello", "Hi"); // output  -> hello Hi
// fn("hello");       // output  -> hello
// fn();              // output  -> undefined undefined









// ---------------------------
function fn() {             
    console.log(arguments);
}
fn("hello", "hi", "bye");
fn("hello", "hi");
fn("hello");
fn();
// if function invocation me arguments pass ho reh hein 
// or function defination me cath nahi kar reh toh wo 
// arguments chale jata he, jitna bhi arguments aata he, 
// at the time of function invocation
// arguments is like a array of objects