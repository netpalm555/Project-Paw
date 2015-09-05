var express = require('express');
var pg = require('pg');
var app = express();

var pgURL = {
  user: "dahrttupatsgrc",
  password: "JphS59a9GcRUHnhuHkTbHjvzFu",
  database: "d9hupdecqpkcup",
  port: 5432,
  host: "ec2-107-21-106-196.compute-1.amazonaws.com",
  ssl: true
};

pg.connect(pgURL, function(err, client) {
  if (err) {
    console.log('Error getting ' + pgURL + " " + err);
    throw err;
  }
  console.log('Connected to postgres! Getting schemas...');

  /*client
    .query('SELECT table_schema,table_name FROM information_schema.tables;')
    .on('row', function(row) {
      console.log(JSON.stringify(row));
    });*/
});

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
