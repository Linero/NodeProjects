const express = require("express");
const users = require("../users");

const router = express.Router();


router.get("/users", function(req, res) {

  res.json(users.list());

});

router.post("/users", function(req, res) {

   users.add(req.body,(err,data)=>{
     if(err) {
      res.status(404);
     res.json({
       error: "User not created"
     });
    }
     else res.json(data);
   })
  
  });

  router.get("/user/:id", function(req, res) {

    users.get(req.params.id, (err,data)=>{
      if(err){
        res.status(404).send(err.message)
        res.json({
          error: "User not found"
        });
      }
      else res.status(!data?404:200).json({data});
    })
  
  });

  router.put("/user/:id", function(req, res) {
    req.body.id = req.params.id
    users.update(req.body, (err,data)=>{
      if(err){
        res.status(404);
        res.json({
          error: "User not find"
        });
      }
      else res.json({data});
    })
  });

  router.delete("/user/:id", function(req, res) {
   users.delete(req.params.id, (err,data)=>{
     if(err){
       res.status(404);
       res.json({
         error: "User not deleted"
       });
     }
     else data!=null ? res.json({data}) :  res.json({
      error: "User not found"
    });

   })
  
  });

  module.exports= router;

