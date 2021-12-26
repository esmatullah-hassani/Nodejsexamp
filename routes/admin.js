const path = require('path');
const express = require('express');
const router = express.Router();
const fs = require('fs');
router.get("/add-product",(req,res,next) => {
    res.sendFile(path.join(__dirname,'../','views','add-product.html'));

    // console.log("In the middleware !");
    // res.send("<form action='/product' method='POST'><input type='text' name='title'><button type='submit'>Submit</button></form>");
    // next(); //Allows the request to continue to the next middleware in line
});

router.post('/product',(req,res,next) => {
    console.log(req.body);
    fs.writeFileSync('test.txt',req.body.title);
    res.redirect('/');
});

module.exports = router;
