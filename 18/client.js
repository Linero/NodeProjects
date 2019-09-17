const fs = require("fs");
const net = require("net");

const client = net.connect({
    port: 8080
});


client.setEncoding("utf8");

client.on("data", data => {
    fs.appendFile("./data.txt", data + "\n", (err) => {
        if (err) return err.message;
    });
    client.write(`Otrzymałem dane ${data}`);
});

client.on("close", (err) => {
    if (err) return err.message;
    console.log("zakończono polłączenie z serwerem");
})