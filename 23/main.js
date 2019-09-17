const del = require("del");

del("files/").then(paths => {
    console.log(`Pliki do usunięcia: ${paths}`);
})