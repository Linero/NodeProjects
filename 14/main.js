const fs = require("fs");
const path = require("path");
// const file = (filename) => path.join(__dirname, "files", filename);
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

// fs.rename(file(null, "files", "Lorem1.txt"), file(null, "newFiles", "Lorem1.txt"), err => {
//     if (err) return console.log(err.message);
//     console.log("Zmieniono nazwę pliku");
// });

function moveFileTo(filepath, directory, cb) {
    filepath = path.join(__dirname, path.normalize(filepath));
    fs.mkdir(path.join(__dirname, directory), (err) => {
        if (err && err.code !== "EEXIST") return cb(err);
        else {
            fs.rename(filepath, path.join(__dirname, directory, path.basename(filepath)), (err) => {
                if (err) return cb(err);
                cb(null, filepath, directory);
            });
        }

    })
}

moveFileTo("files/Lorem1.txt", "newFiles", (err, filepath, directory) => {
    if (err) return console.log(err.message);
    console.log(`Przeniesiono plik ${filepath} do katalogu ${directory}`)
})