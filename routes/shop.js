const path = require('path');
const express = require('express');
const router = express.Router();
const rootDir = require('../util/path');

router.get('/',(req,res,next) => {
    res.sendFile(path.join(rootDir,'views','shop.html'));
    // console.log("In the another middleware !");
    // res.send("<h1>Hello dear all</h1>");
});

module.exports = router;