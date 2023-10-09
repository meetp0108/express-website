// File name: index.ejs
// Student Name: Meetkumar Patel
//Student Id: 301332660
// Date: Oct 9th 2023

var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Me' });
});

router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects' });
});

router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services Page' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Me' });
});

// Define a route to handle form submission
router.post('/submitContact', (req, res) => {
  const { firstName, lastName, contactNumber, email, message } = req.body;

  // For now, simply log the form data
  console.log(`Form submitted: ${firstName}, ${lastName}, ${contactNumber} , ${email}, ${message}`);

  // Redirect back to the Home page
  res.redirect('/');
});

module.exports = router;