const fs = require("fs");
const path = require("path");

const file = (text = "", ...filename) => {
    let temp = path.join(__dirname);
    filename.forEach((element) => {
        if (element.includes(".")) {
            if (text === null) return;
            fs.writeFile(path.join(temp, element), text, err => {
                if (err) return console.log(err.message)
            });
            console.log(`Plik ${element} został utworzony w katalogu: ${temp}`);
        } else {
            temp = path.join(temp, element);
            try {
                fs.mkdirSync(temp);
                console.log(`Utworzono nowy folder: ${element}`)
            } catch (err) {
                if (err.code === "EEXIST") return null;
                else console.log(err.message);
            }
        }
    });
    if (filename[filename.length - 1].includes(".")) return path.join(__dirname, ...filename);
}

fs.watch(file(null, "files", "lorem1.txt"), (eventType, filename) => {
    fs.readFile(file(null, "files", "lorem1.txt"), "utf8", (err, data) => {
        if (!err) {
            fs.writeFile(file(null, "files", "lorem1upper.txt"), data.toUpperCase(), (err) => {
                if (err) console.log(err.message)
            });
        }
    });
})