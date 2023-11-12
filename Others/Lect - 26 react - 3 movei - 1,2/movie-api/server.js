let express = require("express");
let data = require("./data.json");
let port = 4000;

// ek naya server banadega, but ye sirf server ko create karti he run nhi karti
let server = express();

let a = {
  key1: 1,
  key2: 2,
};

server.get("/movies", function (req, res) {
  res.json(data);
});

server.get("/genre", function (req, res) {
  let allGenreObjects = data.map((el) => {
    return el.genre;
  });

  let uniqueGenreObject = [];

  for (let i = 0; i < allGenreObjects.length; i++) {
    let genreId = allGenreObjects[i]["_id"];

    let index = uniqueGenreObject.findIndex((el) => {
      return el._id == genreId;
    });

    if (index == -1) {
      uniqueGenreObject.push(allGenreObjects[i]);
    }
  }

  res.json(uniqueGenreObject);
});

// ye line server ko shuru karti he
// ek port he
server.listen(port, () => console.log(`Server is listening on port ${port}!`));
