const fs = require("fs");
const net = require("net");

const server = net.createServer(socket => {
    let counter = 0;
    const intervalIndex = setInterval(() => {
        if (counter === 10) {
            clearInterval(intervalIndex);
            return socket.end();
        }

        socket.write(String(++counter));
    }, 1000);

    socket.on("data", data => {
        console.log(data.toString());
    })
});


server.listen(8080, () => {
    console.log(`Serwer został uruchomiony pod adresem 127.0.0.1:8080`);
});