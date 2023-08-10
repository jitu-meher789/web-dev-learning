// no function overloading in js
// functin created in head and the its address is in stack
// first memory location happens then code executes line by line


console.log("script started....");

imReal("kjhgf");

function imReal(){
    console.log(" I am real");
}


function imReal(fr) {
    console.log("He is not -> I am the real one");
}

imReal();