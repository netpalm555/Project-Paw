// Require modules
var express = require('express');
var router = express.Router();

// Display a welcome message when /api is visited
router.get('/', function(req, res) {
  res.send('Welcome to the Project Paw api.');
});

// Route requests for /posts to the appropriate router
router.use('/posts', require('./api_routes/posts'));

// Route requests for /users to the appropriate router
router.use('/users', require('./api_routes/users'));

// Publish methods
module.exports = router;
