// null vs undefined vs undeclared




// undefined =? you have declared something but no value exists
let a;
console.log(a);




// null => it has a value of empty
let b = null;
console.log(b);
console.log(typeof null);




// undeclared => variable without declaration
c = 2;
console.log(c);
console.log(global.c);
