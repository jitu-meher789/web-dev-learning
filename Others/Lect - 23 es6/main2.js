// with use strict.


"use strict";

console.log(this); // windows object

function f() {
    console.log(this);  // undefined
}

let obj = {
    prop : 1,
    f: function() {
        console.log(this); // object
    }
}
obj.f();


let obj2 =  {
    prop : 1,
    f: function() {
        function f2() {
            console.log(this); // undefined
        };
        f2();
    }   
}
obj2.f();


// globall -> this  ---> (window object)
// normarl functions -> this ---> (undefined)
// objects direct function -> this ---> (object)
// objects indirect function -> this ---> (undefined)