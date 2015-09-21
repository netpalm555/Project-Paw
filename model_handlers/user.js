var pg = require('pg');
var crypto = require('crypto');
var Password = require('./password');

var dbUrl = process.env.DATABASE_URL || "postgres://dahrttupatsgrc:JphS59a9GcRUHnhuHkTbHjvzFu@ec2-107-21-106-196.compute-1.amazonaws.com:5432/d9hupdecqpkcup?ssl=true";

//Create a new user
//userInfo is a JSON object
exports.create = function(userInfo) {
  pg.connect(dbUrl, function(err, client, done) {
    var query = "INSERT INTO users (username, email, first_name, last_name) VALUES ('" + userInfo.username + "', '" + userInfo.email + "', '" + userInfo.firstName + "', '" + userInfo.lastName + "') RETURNING userId";
    client.query(query).on('error', function(err) {
        console.log(err);
      })
      .on('row', function(result) {
        console.log(result.userid);
        Password.set(result.userid, userInfo.password);
      })
      .on('end', function(result) {
        done();
      });
  });
};

//Get all users
exports.all = function(cb) {
  var toReturn = [];
  pg.connect(dbUrl, function(err, client, done) {
    var query = "SELECT * FROM users";
    //console.log(query);
    client.query(query).on('error', function(err) {
        console.log(err);
      })
      .on('row', function(result) {
        toReturn.push(result);
      })
      .on('end', function(result) {
        done();
        cb(toReturn);
      });
  });
};

//Get user by id
exports.getById = function(userId, cb) {
  pg.connect(dbUrl, function(err, client, done) {
    var query = "SELECT * FROM users WHERE userId = " + userId;
    console.log(query);
    client.query(query).on('error', function(err) {
        console.log(err);
      })
      .on('row', function(result) {
        cb(result);
      })
      .on('end', function(result) {
        done();
      });
  });
};

//Update user information
//userInfo is a JSON object
exports.update = function(userId, userInfo) {
  // pg.connect(dbUrl, function(err, client, done) {
  //   var query = "UPDATE users SET ";
  //   for (info in userInfo) {
  //     if (userId.hasOwnProperty(info)) {
  //       query += (info + " = " + userId[info] + ",");
  //     }
  //   }
  //   query = query.substring(0, query.length - 1);
  //   query += ("WHERE userId = " + userId);
  //   console.log(query);
  // client.query(query).on('error', function(err) {
  //     console.log(err);
  //   })
  //   .on('end', function(result) {
  //     done();
  //   });
  // });
};
