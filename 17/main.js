const fs = require("fs");
const path = require("path");
const argv = require("./argv")
const sortByDate = require("./utils").sortByDate;
const newFilename = require("./utils").newFilename;
// node main.js --dir 'files' --ext 'png' --format 'photo-$$$'
if (!argv.validate(["dir", "ext", "format"])) throw new Error("Nie podano poprawnych parametrów");

const dir = path.join(__dirname, argv.get("dir"));
fs.readdir(dir, (err, files) => {
    if (err) throw err.message;
    let validFiles = files.filter(file => path.extname(file) === ('.' + argv.get("ext")));
    validFiles = sortByDate(validFiles, dir);
    console.log("Nazwy plików zostały zmienione:\n");
    validFiles.forEach((file, index) => {
        try {
            const newName = newFilename(argv.get("format"), argv.get("ext"), index);
            fs.renameSync(path.join(dir, file), path.join(dir, newName));
            console.log(`${file} ---> ${newName}`);
        } catch (e) {
            throw new Error(`Nie można było zmienić nazwy pliku: ${file}\nBłąd: ${e.message}`);
        }

    });
});