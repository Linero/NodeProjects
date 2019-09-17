const path = require("path");
const readFile = require("./readfile").readFile;
const readFileSync = require("./readfile").readFileSync;
const readFile2 = require("./readfile").readFile2;
const readFile3 = require("./readfile").readFile3;

// var file = readFile();

// file
//     .on("data", function(data) {
//         console.log( data.toString() );
//     })
//     .on("error", function(err) {
//         console.log(err);
//     });

// console.log("To będzie pierwszy console.log");

// const file2 = readFileSync(path.join(__dirname, "files", "lorem5.txt"));
// console.log(file2);


// readFile2(null,(err,data)=>{
//     if(err) return console.log(err.message);
    
// });
// console.log("To będzie pierwszy console.log");

readFile3(path.join(__dirname, "files", "lorem3.txt")).then(data=>{
    console.log(data);
})
.catch(err=>{
    console.log(err.message);
});

console.log("To będzie pierwszy console.log");
