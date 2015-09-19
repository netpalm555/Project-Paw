var express = require('express');
var router = express.Router();
var User = require('../../model_handlers/user');
var crypto = require('crypto');

//Handles requests sent to /users/
router.route('/')
  //Returns all users
  .get(function(req, res) {
    res.send(crypto.getHashes());
  })
  //Adds new user
  .post(function(req, res) {

  }
);

//Handles requests sent to /users/:userId
router.route('/:userId')
  //Returns user with userId
  .get(function(req, res) {

  })
  //Updates user with userId
  .post(function(req, res) {

  }
);

module.exports = router;
