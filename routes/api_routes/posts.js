var express = require('express');
var router = express.Router();
var Post = require('../../model_handlers/post');

//Handles requests sent to /posts/
router.route('/')
  //Returns all posts
  .get(function(req, res) {
    Post.getAll(function(returned) {
      res.json(returned);
    });
  })
  //Adds new post
  .post(function(req, res) {
    Post.create('test user', req.body.postText);
    res.redirect('/');
  });

//Handles requests sent to /posts/:id
router.route('/:postId')
  //Returns post with postId
  .get(function(req, res) {
    Post.getById(req.params.postId, function(result) {
      res.json(result);
    });
  })
  //Updates posts with postId
  .post(function(req, res) {

  });

router.use('/:id/comments', require('./comments.js'));

module.exports = router;
