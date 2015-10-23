// Require modules
var express = require('express');
var router = express.Router();

//Handles requests sent to /posts/:postId/comments/
router.route('/')
  //Returns all comments for post with id postId
  .get(function(req, res) {

  })
  //Adds new comment to post with id postId
  .post(function(req, res) {

  });

//Handles requests sent to /posts/:postId/comment/:commentId
router.route('/:commentId')
  //Returns comment with id commentId for post with id postId
  .get(function(req, res) {

  })
  //Updates comment with id commentId for post with id postId
  .post(function(req, res) {

  });

// Publish methods
module.exports = router;
