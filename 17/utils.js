const fs = require("fs");
const path = require("path");
const sortByDate = (files, dir) => {
    files.sort((a, b) => {
        const aStat = fs.statSync(path.join(dir, a));
        const bStat = fs.statSync(path.join(dir, b));
        return aStat.birthtime.getTime() - bStat.birthtime.getTime();
    });
    return files;
}
const newFilename = (format, ext, index) => {
    if (!format.includes("-$")) format += "-$";
    const formated = format.replace(/(\$+)/, match => {
        const iter = match.length - index.toString().length
        return "0".repeat(iter < 0 ? 0 : iter) + index + "." + ext;
    });

    return formated;
}

module.exports = {
    sortByDate,
    newFilename
}