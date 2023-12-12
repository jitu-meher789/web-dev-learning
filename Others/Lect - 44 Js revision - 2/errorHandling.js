let fs = require('fs');


try {
    fs.readFileSync("a.txt");
} catch (e) {
    console.log("error reading file");
}