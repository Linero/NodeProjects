const http = require("http");

const server = http.createServer(function(req, res) {

    console.trace("zapytanie http");

    var body = null,
        status = 200;

    if(req.url === "/") {
        body = "Strona główna";
    } else if(req.url === "/o-nas") {
        body = "O nas";
    } else {
        body = "Nie znaleziono";
        status = 404;
    }

    debugger;

    res.writeHead(status, {"Content-Type": "text/html"});

    res.write(body);

    res.write(`<h3>HTTP ${req.httpVersion} ${req.method}</h3>`);
    res.write(`<h3>URL: ${req.url}</h3>`);

    res.write( `<pre>${JSON.stringify(req.headers, null, 4)}</pre>` );
    res.end();

});

server.listen(8000, function() {
    console.log("Serwer uruchomiony pod adresem: http://localhost:8080");
});
