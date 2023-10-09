// File name: index.ejs
// Student Name: Meetkumar Patel
//Student Id: 301332660
// Date: Oct 9th 2023  

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
