Function.prototype.myCall = function() {
    let orgFun = this;
    let argsArray = Array.from(arguments);
    let newThis = argsArray[0];
    let newParams = argsArray.splice(1);

    // orgFun.apply(newThis,newParams);
    newThis.fun = orgFun;
    newThis.fun(...newParams);
    delete newThis.fun;

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


obj.fun1.myCall(o2, "Vikas", "Navdeep", "Jitu", "Rajneesh", "Kapil");


