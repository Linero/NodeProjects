const express = require("express");
const hbs = require("express-handlebars");
const users = require("./users");
const bodyPasrser=require("body-parser");
const api = require("./api");
const app = express();

app.engine("handlebars", hbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.use( express.static("public") );
app.use(bodyPasrser.json());
app.use("/api",api);
app.get("/", function(req, res) {

    res.render("home", {
        title: "Lista użytkowników",
        users: users.list()
    });

});



app.listen(8080, function() {

    console.log("Serwer został uruchomiony pod adresem http://localhost:8080");

});
