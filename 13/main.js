const fs = require("fs");
const path = require("path");
const file = (filename) => path.join(__dirname, "files", filename);
// fs.mkdir(path.join(__dirname, "files"), err => {
//     if (err) {
//         if (err.code === "EEXIST") return console.log("Katalog już istnieje");
//         else return console.log(err.message);
//     }
//     console.log("Katalog file został utworzony");
// });

// fs.writeFile(file("Lorem1.txt"), "", err => {
//     if (err) return console.log(err.message);
//     console.log("Plik został utworzony");
// });

// fs.appendFile(file("Lorem1.txt"), Date.now() + "\n", err => {
//     if (err) return console.log(err.message);
//     console.log("Tekst został dodany");
// })

// const lorem = fs.createWriteStream(file("Lorem2.txt"));
// lorem.on("finish", () => {
//     console.log("Zakończono kopiowanie pliku")
// });
// fs.createReadStream(file("Lorem1.txt")).pipe(lorem);

fs.mkdtemp(path.join(__dirname, "uploads-"), (err, dir) => {
    if (err) return console.log(err.message);
    console.log(`Utworzono katalog tymczasowy ${dir}`);
});

const temp = fs.mkdtempSync(path.join(__dirname, "uploads-"));
console.log(`Utworzono katalog tymczasowy ${temp}`);
fs.rmdir(temp, err => {
    if (err) return console.log(err.message);
    console.log(`Usunięto katalog tymczasowy ${temp}`);
});