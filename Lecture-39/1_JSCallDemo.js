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
    fullName: "Neha",
    age: 44
};

// obj.fun1("Navdeep", "Vikash");
obj.fun1.call(o2, "Mehwish", "Shailja");
// obj.fun1.apply(o2,["Mehwish", "Shailja", "Supriya"]);
// let bindFunction = obj.fun1.bind(o2, "Mehwish", "Shailja", "Supriya");
// bindFunction();







// call is a function, it is available on all functions. it can be used to call the functions.
// the use case is, if  you want to override the default this.
// 
// bind is dis-similar, it doesn't make a call , it gives you a new function to call
