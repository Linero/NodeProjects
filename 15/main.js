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

// fs.rmdir(path.join(__dirname, "files"), err => {
//     if (err) return console.log(err.message);
//     console.log("Usunięto");
// });
const rmdir = (dir, cb) => {
    const dirname = path.join(__dirname, dir);
    fs.rmdir(dirname, (err) => {
        if (err) {
            if (err.code !== "ENOTEMPTY") return cb(err);
            fs.readdir(dirname, (err, files) => {
                if (err) return cb(err);
                let counter = 0;
                files.forEach((file, index) => {

                    fs.unlink(path.join(dirname, file), err => {
                        if (!err) counter++;
                        if (index + 1 === file.length && counter !== file.length) return cb(new Error(`Nie udało suę usunąć wszystkich plików`));
                        if (counter === files.length) rmdir(dir, cb)

                    })

                });
            });

        } else {
            cb(null, dir);
        }
    });
}

// rmdir("files", (err, dirname) => {
//     if (err) return console.log(err.message);
//     console.log(`Usunięto folder: ${dirname}`);
// });

const remove =(dir)=>{
let pathTable=[path.join(__dirname,dir)];
let folders = [];
let pathValue = 1;
let oldValue=1;
let ile=0;

const dell= ()=>{
    let temp=0;
    if(oldValue===0)return console.log(pathTable);
    for(let j=0;j<oldValue;j++){
        let i = j+1;
const tempFolder = fs.readdirSync(pathTable[pathValue-i-ile]);
ile=0;
console.log("old"+oldValue)
temp = tempFolder.length;
console.log(temp)
if(pathTable[pathValue-i].length===0)break;
    for(let j=0;j<tempFolder.length;j++){
        console.log("to"+tempFolder.length)
        let i = j+1;
        ile=j;
        const x = path.join(pathTable[pathValue-i],tempFolder[tempFolder.length-i]);
        pathValue = pathTable.push(x);
        if(pathTable[pathValue-i].length===0)break;
    }
}
oldValue = temp;
console.log(pathTable);
dell();
    
}
dell();
}

// remove("files", (err, dirname) => {
//     if (err) return console.log(err.message);
//     console.log(`Usunięto folder: ${dirname}`);
// });
remove("files");
