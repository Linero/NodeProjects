const path = require("path")
const util = require("util")
const log = util.format("Nazwa pliku to %s", path.basename(__filename));
console.log(log);