Function.prototype.myBind = function() {
    let orgFun = this;
    let argsArr = Array.from(arguments);
    let newThis = argsArr[0];
    let newParams = argsArr.slice(1);

    let myFnc = function() {
       let moreParams = Array.from(arguments);
       let totalParams = newParams.concat(moreParams);

       orgFun.apply(newThis, totalParams);
    }
    return myFnc;
}


let obj = {
    fun1 : function (frnd1, frnd2) {
        console.log("This man is called " + this.fullName + " His/Her age is " + this.age + ".");
        console.log(this.fullName + " says hello to " + frnd1 + ".");
        console.log(this.fullName + " says hello to " + frnd2 + ".");

        console.log(arguments);
    },
    fullName: "Sumeet Malik",
    age: 34
};

let o2 = {
    fullName: 'Neha',
    age: 21
};

// obj.fun1("Vikas", "Navdeep", "Jitu", "Rajneesh", "Kapil");
// obj.fun1.call(o2, "Vikas", "Navdeep", "Jitu", "Rajneesh", "Kapil");
// obj.fun1.apply(o2, ["Vikas", "Navdeep", "Jitu", "Rajneesh", "Kapil"]);

let boundFunction = obj.fun1.myBind(o2, "Vikas", "Navdeep", "Jitu", "Rajneesh", "Kapil");
boundFunction("Jasbir", "Pankaj");