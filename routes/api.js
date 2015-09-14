var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.send('Welcome to the Project Paw api.');
});

//Route requests for /posts to the appropriate router
router.use('/posts', require('./api_routes/posts'));

//Route requests for /users to the appropriate router
router.use('/users', require('./api_routes/users'));

module.exports = router;
