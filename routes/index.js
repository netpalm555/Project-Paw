var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.get('/partials/:name', function(req, res) {
  res.render('partials/' + req.params.name);
});
router.route('/data')
  .post(function(req, res) {
    console.log(req.body.message);
    res.end(req.body.message + " was received");
  })
  .get(function(req, res) {
    res.render('upload');
  });

module.exports = router;
