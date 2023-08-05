// uppercase the all >= 100 and lowercase all < 100

let products = [
    {name : "T-shirt", price : 150},
    {name : "Headphone", price : 75},
    {name : "Usb Mouse", price : 265},
    {name : "Keyboard", price : 95},
    {name : "Earphone", price : 75},
    {name : "Mouse", price : 490},
    {name : "Use cable", price : 25},
];

let productsName = products.map((v, i, oarr) => {
    if(v.price >= 100) {
        return v.name.toUpperCase();
    }else{
        return v.name.toLowerCase();
    }
});

console.log(productsName);
