var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', message: 'Is this thing on?' });
});
router.get('/partials/:name', function(req, res) {
  res.render('partials/' + req.params.name);
});

module.exports = router;
