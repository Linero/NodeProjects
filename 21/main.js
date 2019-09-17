const https = require("https");
const fs = require("fs");
const path = require("path");

const MINE_TYPES = {
    ".html": "text/html",
    ".css": "text/css",
    ".jpg": "image/jpeg"
};

const options = {
    key: fs.readFileSync(path.join(__dirname, "cert", "localhost.key")),
    cert: fs.readFileSync(path.join(__dirname, "cert", "localhost.cert"))
}

const server = https.createServer(options, (req, res) => {
    let filename = req.url.slice(1),
        file = null;
    if (req.url === "/" || req.url === "/Home") {
        filename = "index.html";
    }

    file = fs.createReadStream(path.join(__dirname, "public", filename));
    file.on("error", (err) => {
        res.writeHead(404, "Not Found");
        res.end();
    });
    res.writeHead(200, MINE_TYPES[path.extname(filename)]);
    file.pipe(res);

});

server.listen(8000, () => {
    console.log("Serwer uruchomiony");
});