function sayHi() {
    console.log("Hi")
}

// will go to callstack get executed and will be popped off
sayHi();


// setTimeout ek function he, apne use ek dusra function de rekha he as an arguments
// or is function ko callback kehte hein
setTimeout(()  => {
    console.log("this will greet after 2 secs");
},2000)




// what event loop does => event loop checkk karta he 
// ki agar callstack khali he or callback queue me agar
// koi function he toh use  callstack me laate he or execute karta he