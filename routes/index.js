var express = require('express');
var router = express.Router();
var path = require('path');

router.use('/api', require('./api'));
/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile('/views/' + 'index.html', {
    "root": path.join(__dirname, '../')
  });
});
router.get('/partials/:name', function(req, res) {
  console.log("sending partial");
  res.sendFile('/views/partials/' + req.params.name, {
    "root": path.join(__dirname, '../')
  });
});
router.get('*', function(req, res, next) {
  res.sendFile('/views/' + 'index.html', {
    "root": path.join(__dirname, '../')
  });
});

module.exports = router;
