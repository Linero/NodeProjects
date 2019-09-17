const fs = require("fs");
const stream = fs.createReadStream(`${__dirname}/text.txt`, {
    highWaterMark: 16 * 1024
});
const gzip = require("zlib").createGzip();

const Console = require("console").Console;
const loggs = fs.createWriteStream(`${__dirname}/logs.txt`);
const errors = fs.createWriteStream(`${__dirname}/errors.txt`);

const myConsole = new Console(loggs, errors);

const compressed = fs.createWriteStream(`${__dirname}/text.txt.gz`);
console.time("gzip")
stream.pipe(gzip).pipe(compressed).on("close", () => {
    console.timeEnd("gzip")
});

// stream.on("data", function (chunk) {
//     console.log(`Wielkość kawałka ${Math.round(chunk.length/1024)}KB`);
//     console.log(chunk);
// })
// stream.on("close", () => {
//     console.log("Odczytywanie zakończone");
// })

// stream.pipe(process.stdout)
myConsole.log("Pierwsza wiadomość");
myConsole.log("Druga wiadomość");
myConsole.error("Wiadomość z błędem");