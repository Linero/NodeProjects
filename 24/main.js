const express = require("express");
const hbs = require("express-handlebars");
const USER = "admin";
const PASSWORD = "123456";
const serveIndex= require("serve-index");

const app = express();

app.use("/files",express.static("public"));
app.use("/files",serveIndex("public"));

app.engine("handlebars", hbs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

app.use((req,res,next)=>{
    res.locals.data = "DAne dodane wczewśniej";
    res.removeHeader("X-Powered-By");
    next();
});

app.use("/admin", (req,res,next)=>{
if(req.query.user === USER && req.query.password===PASSWORD)return next();
res.redirect("/");

});

app.get("/", (req, res) => {
    res.render("home", {
        title: res.locals.data,
        content: "To jest strona główna"
    });
});

app.get("/blog/:date/:id?", (req, res) => {
    res.render("blog", {
        title: "blog",
        date: req.params.date,
        id: req.params.id
    });
});

app.get("/admin", (req, res) => {
    res.send("Admin zone");

});


// app.get("/blog/:data/:id?", (req, res) => {

//     if (req.params.id == 55) {
//         res.send(`
// Wpis o id ${req.params.id} utworzony ${req.params.data}
// <pre>${JSON.stringify(req.query,null,4)}</pre>`);
//     } else res.send("Brak treści")
// });


app.listen(8080, () => {
    console.log(`serwer działa`)
});
