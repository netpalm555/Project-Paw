var pg = require('pg');

var dbUrl = process.env.DATABASE_URL || "postgres://dahrttupatsgrc:JphS59a9GcRUHnhuHkTbHjvzFu@ec2-107-21-106-196.compute-1.amazonaws.com:5432/d9hupdecqpkcup?ssl=true";

//Create a new post
exports.create = function(user, text) {
  pg.connect(dbUrl, function(err, client, done) {
    var now = new Date();
    var query = "INSERT INTO posts (author, lastedited, posttext) VALUES ('" + user + "', '" + now.toISOString() + "', '" + text + "' )";
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
  pg.connect(dbUrl, function(err, client, done) {
    var query = "SELECT * FROM posts, users WHERE posts.author = users.email ORDER BY posts.lastedited DESC";
    console.log(query);
    client.query(query).on('error', function(err) {
        console.log(err);
      })
      .on('row', function(result) {
        toReturn.push(result);
      })
      .on('end', function(result) {
        done();
        console.log(toReturn);
        callback(toReturn);
      });
  });
};

//Get post by id
exports.getById = function(postId, callback) {
  var toReturn;
  pg.connect(dbUrl, function(err, client, done) {
    var query = "SELECT * FROM posts WHERE postId = " + postId;
    console.log(query);
    client.query(query).on('error', function(err) {
        console.log(err);
      })
      .on('row', function(result) {
        toReturn = result;
      })
      .on('end', function(result) {
        done();
        callback(toReturn);
      });
  });
};

//Get all posts by a user
exports.allByUser = function(userId) {

};

//Update post with new text
exports.update = function(postId, newText) {

};
