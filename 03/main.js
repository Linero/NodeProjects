const calc = require("./calculator");

console.log("Moduł główny")
console.log(calc.add(5, 5))
console.log("Nazwa modułu: " + calc.config.name + calc.config.version)