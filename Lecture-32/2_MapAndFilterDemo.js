let products = [
    {name : "T-shirt", price : 150},
    {name : "Headphone", price : 75},
    {name : "Usb Mouse", price : 265},
    {name : "Keyboard", price : 95},
    {name : "Earphone", price : 75},
    {name : "Mouse", price : 490},
    {name : "Use cable", price : 25},
];

let productsName = products.filter((v, i, oarr) => {
    return v.price >= 100;
}).map((v, i, oarr) => {
    return v.name.toUpperCase();
});

console.log(productsName);