const express = require("express");
const router = express.Router();


const addUserRoute = require('./add-user');

router.get("/users",(req,res)=>{
    res.render('users',{users:addUserRoute.users,pageTitle:"Users"});
});

module.exports = router;