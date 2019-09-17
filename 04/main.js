const add = require("./add")
const calculator = require("./calculator")

add.number = 5;

console.log(calculator.x.number)

console.log(add.add(5, 5));
console.log(add.message);
console.log(__dirname);
console.log(__filename);
console.log(require.main === module);