const fs = require("fs");
const path = require("path");

const file = (filename) => {
    return path.join(__dirname, "files", filename)
}

// fs.readFile(file("text1.txt"), "utf8", (err, data) => {
//     if (err) return console.log(`Wystąpił błąd: ${err.message}`);
//     console.log(data.toString());
//     console.log(data);
// })

// try {
//     const lorem = fs.readFileSync(file("text2.txt"), "utf8")
//     console.log(lorem);
// } catch (err) {
//     console.log(err.message)
// }

const lorem2 = fs.createReadStream(file("text3.txt"), {
    encoding: "utf8"
});
lorem2.pipe(process.stdout);