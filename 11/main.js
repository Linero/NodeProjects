const fs = require("fs");
const path = require("path");
fs.exists(path.join(__dirname, "files", "text1.txt"), (exists) => {
    if (exists) console.log("Plik istnieje");
    else console.log("Plik nie istnieje");
});

// fs.readdir(path.join(__dirname, "files"), (err, files) => {
//     if (err) {
//         console.log(`Wystąpił błąd ${err.message}`);
//         throw err;
//     }
//     files.forEach(file => {
//         fs.stat(path.join(__dirname, "files", "text1.txt"), (err, stats) => {
//             if (err) {
//                 console.log(`Wystąpił błąd ${err.message}`);
//                 throw err;
//             }
//             console.log(`Nazwa pliku: ${file}`);
//             console.log(`Data urodzenia: ${stats.birthtime}`);
//             console.log(`Data ostatniej modyfikacji: ${stats.mtime}`);
//             console.log(`isFile: ${stats.isFile()}`);
//             console.log(`isDirectory: ${stats.isDirectory()}\n`);
//         });
//     });
// });

try {
    const stat = fs.statSync(path.join(__dirname, "files", "text1.txt"));
    console.log(stat);
} catch (e) {
    console.log(`Wystąpił błąd: ${e.message}`)
}

console.log("To wykona sie przed wyswietleniem statystyk");