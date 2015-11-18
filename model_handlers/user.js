var pg = require('pg');
var crypto = require('crypto');
var Password = require('./password');
var User = require('./user');

var dbUrl = process.env.DATABASE_URL || "postgres://dahrttupatsgrc:JphS59a9GcRUHnhuHkTbHjvzFu@ec2-107-21-106-196.compute-1.amazonaws.com:5432/d9hupdecqpkcup?ssl=true";

//Create a new user
//userInfo is a JSON object
exports.create = function(userInfo, cb) {
  picUrl = crypto.createHash('md5').update(userInfo.email).digest('hex');
  pg.connect(dbUrl, function(err, client, done) {
    var query = "INSERT INTO users (email, first_name, last_name, email_hash) VALUES ('" + userInfo.email + "', '" + userInfo.firstName + "', '" + userInfo.lastName + "', '" + picUrl + "') RETURNING userId";
    client.query(query).on('error', function(err) {
        console.log(err);
      })
      .on('row', function(result) {
        console.log(result.userid);
        Password.set(result.userid, userInfo.password);
        cb(userInfo.email);
      })
      .on('end', function(result) {
        done();
      });
  });
};

exports.authenticate = function(email, password, cb) {
  User.getByEmail(email, function(result) {
    console.log(result);
    Password.validate(result.userid, password, function(valid) {
      cb(valid);
    });
  });
}

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

exports.getByEmail = function(email, cb) {
  pg.connect(dbUrl, function(err, client, done) {
    var query = "SELECT * FROM users WHERE email = '" + email + "'";
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
