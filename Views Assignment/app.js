const express = require('express');

const bodyParse = require("body-parser");

const app = express();
const addUserRoute = require('./routes/add-user');
const usersRoute = require('./routes/users');

app.set('view engine','ejs');
app.set('views','views')


app.use(bodyParse.urlencoded({ extended: false }));
app.use(addUserRoute.router);
app.use(usersRoute)

app.use((req,res,next)=>{
    res.status(404).render('404',{pageTitle:"Page not found"});
});


app.listen(3000)