const express = require("express");
const router = express.Router();

const users = [];

router.get("/",(req,res)=>{
    res.render('add-user',{pageTitle:"Add users"});
});


router.post("/",(req,res)=>{
    users.push({title:req.body.username});
    res.redirect("/users")
});

exports.router = router;
exports.users = users;