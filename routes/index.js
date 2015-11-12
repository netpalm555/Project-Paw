// Require modules
var express = require('express');
var router = express.Router();
var path = require('path');

// Send request to /api to the api file
router.use('/api', require('./api'));

// Send a partial with name ':name' when there is a request to /partials/
router.get('/partials/:name', function(req, res) {
  console.log("sending partial");
  res.sendFile('/views/partials/' + req.params.name, {
    "root": path.join(__dirname, '../')
  });
});

// router.get('*', function(req, res, next) {
//   console.log(req.url);
//   if(req.session.userId || (req.url == '/register') || (req.url == '/')) {
//     next();
//   } else {
//     res.redirect('/register');
//   }
// });

// Load index.html on request to just '/'
router.get('/', function(req, res, next) {
  res.sendFile('/views/' + 'index.html', {
    "root": path.join(__dirname, '../')
  });
});


// Route all other requests to Angular to handle
router.get('*', function(req, res) {
  res.sendFile('/views/' + 'index.html', {
    "root": path.join(__dirname, '../')
  });
});

// Publish methods
module.exports = router;
