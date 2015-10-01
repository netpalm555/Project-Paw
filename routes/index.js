var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile('./views/index.html');
});
router.get('/partials/:name', function(req, res) {
  res.render('partials/' + req.params.name);
});
router.use('/api', require('./api'));
router.use('*', function(req, res) {
  res.sendFile('./views/index.html');
})

module.exports = router;
