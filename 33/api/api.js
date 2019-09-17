const express = require("express");
const users = require("../users");

const router = express.Router();

router.get("/users", function(req, res) {

    users.list().then(data=>res.json(data))
    .catch(()=>{
        res.status(404).json({
            error: "Users not found"
        });
    });

});

router.post("/users", function(req, res) {

    users.add(req.body).then(data=>res.json(data))
    .catch(()=>{
        res.status(404).json({
                error: "User not created"
            });
    });

});

router.get("/user/:id", function(req, res) {

    users.get(req.params.id).then(data=> res.json(data))
    .catch(()=>{
        res.status(404).json({
            error: "User not found"
        });
    });

});

router.put("/user/:id", function(req, res) {

    req.body.id = req.params.id;

    users.update(req.body).then(data=>res.json(data))
    .catch(()=>{
        res.status(404).json({
            error: "User not find"
        });
    });

});

router.delete("/user/:id", function(req, res) {

    users.delete(req.params.id).then(data => res.json(data))
    .catch(()=>{
        res.status(404).json({
                error: "User not deleted"
            });
    });  

});

module.exports = router;
