const http = require("http");
const fs = require("fs");
const path = require("path");
const server = http.createServer((req, res) => {
    let body = null,
        status = 200;

    if (req.url === "/") {
        body = "strona główna";
    } else if (req.url === "/o-nas") {
        body = "O nas"
    } else {
        body = "Nie znaleziono strony";
        status = 404;
    }
    res.writeHead(status, {
        "Content-Type": "text/html"
    });


    res.write(body);
    // res.write(path.join(__dirname, "index.html"));


    const txt = fs.readFileSync(path.join(__dirname, "index.html"));
    res.write(txt);


    // res.end("<b>Hello</b>");
    // res.setHeader("Content-Type", "text/html");
    res.write(`<h3>HTTP ${req.httpVersion} ${req.method}</h3>`);
    res.write(`<h3>URL ${req.url}</h3>`);
    res.write(`<pre>${JSON.stringify(req.headers,null,4)}</pre>`);
    res.end();


});

server.listen(8000, () => {
    console.log("Serwer został uruchomiony pod adresem http://localhost:8000");
})