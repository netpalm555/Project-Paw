var pg = require('pg');
var crypto = require('crypto');

var dbUrl = process.env.DATABASE_URL || "postgres://dahrttupatsgrc:JphS59a9GcRUHnhuHkTbHjvzFu@ec2-107-21-106-196.compute-1.amazonaws.com:5432/d9hupdecqpkcup?ssl=true";

//Create a new user
//userInfo is a JSON object
/* userInfo values
 * username
 * email
 * firstName
 * lastName
 * password
 */
exports.create = function(userInfo) {
  pg.connect(dbUrl, function(err, client, done) {
    var salt = crypto.randomBytes(64);
    var hashedPass = crypto.pbkdf2Sync(userInfo.password, salt, 10000, 512, 'sha256');
    var query = "INSERT INTO users (username, email, first_name, last_name, salt, password) VALUES ('" + userInfo.username + "', '" + userInfo.email + "', '" + userInfo.firstName + "', '" + userInfo.lastName + "', '" + salt + "', '" + hashedPass + "')";
    console.log(query);
    client.query(query).on('error', function(err) {
        console.log(err);
      })
      .on('row', function(result) {

      })
      .on('end', function(result) {
        done();
      });
  });
};

//Get all users
exports.all = function() {
  pg.connect(dbUrl, function(err, client, done) {
    var query = "";
    console.log(query);
    client.query(query).on('error', function(err) {
        console.log(err);
      })
      .on('row', function(result) {

      })
      .on('end', function(result) {
        done();
      });
  });
};

//Get user by id
exports.all = function(userId) {
  pg.connect(dbUrl, function(err, client, done) {
    var query = "";
    console.log(query);
    client.query(query).on('error', function(err) {
        console.log(err);
      })
      .on('row', function(result) {

      })
      .on('end', function(result) {
        done();
      });
  });
};

//Update user information
//userInfo is a JSON object
exports.update = function(userId, userInfo) {
  pg.connect(dbUrl, function(err, client, done) {
    var query = "";
    console.log(query);
    client.query(query).on('error', function(err) {
        console.log(err);
      })
      .on('row', function(result) {

      })
      .on('end', function(result) {
        done();
      });
  });
};
