Function.prototype.myCall = function() {
    let arr = Array.from(arguments);

    let orgThis = arr[0];
    let orgEle = arr.slice(1);
    
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
obj.fun1.call(o2, "Shouvik", "Sanju");