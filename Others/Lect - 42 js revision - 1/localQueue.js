
function queue () {
    let arr = [];

    return function (op,val) {

        if(op === "insert" ){
            arr.push(val);
        }else if(op === "out") {
            arr.shift();
        }else if(op === "show") {
            console.log(arr);
        }
    }   
}

let f = queue();
f("insert", 2);
f("insert", 1);
f("insert", 3);
f("insert", 4);
f("show");
f("out");
f("show");
