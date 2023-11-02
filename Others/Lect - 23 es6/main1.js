// without use strict.

console.log(this);

function f() {
    console.log(this);
}

let obj = {
    prop : 1,
    f: function() {
        console.log(this);
    }
}
obj.f();



let obj2 = {
    prop : 1,
    f: function() {
        function f2() {
            console.log(this)
        };
        f2();
    }
}

obj2.f();

// globall -> this  ---> (window object)
// normarl functions -> this ---> (window object)
// objects direct fucntion -> this ---> (object)
// objects indirect fucntion -> this ---> (window object)