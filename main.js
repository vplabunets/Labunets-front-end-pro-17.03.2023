const uniqid = require("uniqid");
const http = require("http");
const fs = require("fs");
const MIN = 36;
const MAX = 36.5;

function getRandomArbitrary(min, max) {
  return Number.parseFloat(Math.random() * (max - min) + min).toFixed(4);
}
async function fetchData(url) {
  const response = await fetch(url);
  return response.json();
}

(async function arrayGenerator(elementsNumber) {
  const names = await fetchData(
    "https://www.randomlists.com/data/names-female.json"
  );
  const array = [];
  for (let i = 0; i < elementsNumber; i += 1) {
    array.push({
      id: uniqid(),
      name: names.data[i],
      coordinate: [getRandomArbitrary(MIN, MAX), getRandomArbitrary(MIN, MAX)],
    });
  }
  fs.writeFileSync("main.txt", JSON.stringify(array));
})(25);

http
  .createServer(function (req, res, body) {
    //http header
    res.writeHead(200, { "Content-Type": "application/json" });
    const url = req.url;
    const offers = JSON.parse(fs.readFileSync("main.txt", "utf-8"));

    if (url === "/offers") {
      if (req.method === "POST") {
        offers.push({
          id: uniqid(),
          name: "Helen",
          coordinate: [
            getRandomArbitrary(MIN, MAX),
            getRandomArbitrary(MIN, MAX),
          ],
        });
        fs.writeFileSync("main.txt", JSON.stringify(offers));
        const data = fs.readFileSync("main.txt", "utf-8");
        res.write(data);
        res.end();
      }
      if (req.method === "GET") {
        const data = fs.readFileSync("main.txt", "utf-8");
        res.write(data);
        res.end();
      }
    } else if (url === "/comments") {
      res.write("get comments please");
      res.end();
    } else {
      res.write("wrong route");
      res.end();
    }
  })
  .listen(4001, function () {
    console.log("Server is running on port 4001");
  });
