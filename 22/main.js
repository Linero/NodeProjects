const sleep = ms => {
    const now = Date.now();
    while (Date.now() - now < ms) {}
}

const http = require("http");
const url = require("url");
const queryString = require("querystring");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
    const kill = queryString.parse(url.parse(req.url).query).kill;
    // console.log(req.url)
    // console.log(url.parse(req.url));
    // console.log(url.parse(req.url).query);
    // console.log(queryString.parse(url.parse(req.url).query));
    // console.log(kill)
    if (Number(kill) === 1) {
        sleep(6000);
    }
    fs.readFile(path.join(__dirname, "index.html"), (err, data) => {
        if (err) err.message;
        // res.write("aaaaa");
        res.writeHead(200, "text/html");
        res.write(data.toString());
        res.end("dudu");
    });

    // res.end("Hello World");
});

server.listen(8080, () => {
    console.log(`Serwer uruchomiony`);
});