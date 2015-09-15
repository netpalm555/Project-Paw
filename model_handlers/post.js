var pg = require('../pg');


//Create a new post
exports.create = function(user, text) {
  pg.connect(function(err, client, done) {
    client.query('INSERT INTO posts ').on('end', function() {
      done();
    });
  });
};

//Get all posts
exports.all = function() {

};

//Get post by id
exports.all = function(postId) {

};

//Get all posts by a user
exports.allByUser = function(userId) {

};

//Update post with new text
exports.update = function(postId, newText) {

};
