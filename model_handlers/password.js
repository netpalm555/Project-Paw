var pg = require('pg');
var crypto = require('crypto');

var dbUrl = process.env.DATABASE_URL || "postgres://dahrttupatsgrc:JphS59a9GcRUHnhuHkTbHjvzFu@ec2-107-21-106-196.compute-1.amazonaws.com:5432/d9hupdecqpkcup?ssl=true";

exports.set = function(userId, password) {
  pg.connect(dbUrl, function(err, client, done) {
    var salt = crypto.randomBytes(64).toString('hex');
    var hashedPass = crypto.pbkdf2Sync(password, salt, 10000, 512, 'sha512').toString('hex');
    var query = "INSERT INTO passwords (userId, salt, password) VALUES ('" + userId + "', '" + salt + "', '" + hashedPass + "')";
    console.log(query);
    client.query(query).on('error', function(err) {
        console.log(err);
      })
      .on('end', function(result) {
        done();
      });
  });
}

exports.validate = function(userId, password, cb) {
  pg.connect(dbUrl, function(err, client, done) {
    var query = "SELECT * FROM passwords WHERE userId = " + userId;
    console.log(query);
    client.query(query).on('error', function(err) {
        console.log(err);
      })
      .on('row', function(result) {
        var salt = result.salt;
        var hashedPass = crypto.pbkdf2Sync(password, salt, 10000, 512, 'sha512').toString('hex');
        if (hashedPass == result.password) {
          cb(true);
        } else {
          cb(false);
        }
      })
      .on('end', function(result) {
        done();
      });
  });
}
