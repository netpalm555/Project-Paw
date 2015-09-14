var express = require('express');
var router = express.Router();

//Handles requests sent to /users/
router.route('/')
  //Returns all users
  .get(function(req, res) {

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
