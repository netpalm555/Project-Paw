var pg = require('pg');

var dbUrl = process.env.DATABASE_URL || "postgres://dahrttupatsgrc:JphS59a9GcRUHnhuHkTbHjvzFu@ec2-107-21-106-196.compute-1.amazonaws.com:5432/d9hupdecqpkcup?ssl=true";

//Create a new post
exports.create = function(user, text) {
  pg.connect(dbUrl, function(err, client, done) {
    var now = new Date();
    var query = "INSERT INTO posts (author, lastedited, posttext) VALUES ('guest', '" + now.toISOString() + "', '" + text + "' )";
    console.log(query);
    client.query(query).on('error', function(err) {
      console.log(err);
    })
    .on('end', function(result) {
      console.log('completed sucessfully: ' + JSON.stringify(result));
      done();
    });
  });
};

//Get all posts
exports.getAll = function(callback) {
  var toReturn = [];
  var canReturn = false;
  pg.connect(dbUrl, function(err, client, done) {
    var query = "SELECT * FROM posts";
    console.log(query);
    client.query(query).on('error', function(err) {
      console.log(err);
    })
    .on('row', function(result) {
      //console.log(result);
      toReturn.push(result);
    })
    .on('end', function(result) {
      //console.log('completed sucessfully: ' + JSON.stringify(result));
      console.log(toReturn);
      done();
      callback(toReturn);
    });
  });
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
