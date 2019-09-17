const express = require("express");
const hbs = require("express-handlebars");
const users = require("./users");
const bodyParser = require("body-parser");
const api = require("./api");
const app = express();

app.engine("handlebars", hbs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

app.use(express.static("public"));
app.use(bodyParser.json());
app.use("/api", api);
app.get("/", function (req, res) {

    users.list((err, users) => {

        res.render("home", {
            title: "Lista użytkowników",
            users: err ? [] : users
        });
    });

});

app.get("/user/:id", function (req, res) {

    users.get(req.params.id,(err, user) => {
if(err) res.status(404).send(err.message);
       else {
           res.status(!user?404:200).render("user", {
            title: "użytkownik",
            user
        });
    }
    });

});



app.listen(8000, function () {

    console.log("Serwer został uruchomiony pod adresem http://localhost:8080");

});
