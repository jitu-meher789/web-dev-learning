let obj = {
    fun1: function() {
        console.log("This man is called " + this.fullName + " " + ". His age is " + this.age);
    },
    fun2: function() {
        console.log("This man is called " + obj.fullName + " " + ". His age is " + obj.age);
    },
    fun3: function() {
        console.log("This man is called " + fullName + " " + ". His age is " + age);
    },
    fullName: "summit mallik",
    age: 34
}

obj.fun1(); // for this line -> this is obj
obj.fun2(); // for this calling -> obj is defined
obj.fun3(); // for this line throw an error of fullName is not defined(line 9)
