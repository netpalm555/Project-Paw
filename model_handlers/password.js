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
