// Require modules
var express = require('express'); // Express framework
var session = require('express-session');
var path = require('path'); // File path utility
var favicon = require('serve-favicon'); // Favicon server
var cookieParser = require('cookie-parser'); // Browser cookie reader/writer
var bodyParser = require('body-parser'); // Reads POST data
var pg = require('pg'); // Connects to and modifies the Postgres server
var redisStore = require('connect-redis')(session);

// Require file to handle routing
var routes = require('./routes/index');

// Create the main application that runs
var app = express();

// Beautify JSON output from prostgres
app.set('json spaces', 2);

// Serve the faicon image
app.use(favicon(path.join(__dirname, 'public', '/img/favicon.ico')));

// Setup in order to parse POST data to JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

// Setup cookie parser
app.use(cookieParser());
app.use(session({
  store: new redisStore({
    host: 'pub-redis-12647.us-east-1-4.5.ec2.garantiadata.com',
    port: 12647,
    pass: 'HaHsRedis'
  }),
  secret: '415825827528hkgaahqfahaagahgka',
  resave: false,
  saveUninitialized: true,
  cookie: {secure: false}
}));

// Create a url path to the public folder
app.use(express.static(path.join(__dirname, 'public')));

// Get or set the url of the Postgres server
var dbUrl = process.env.DATABASE_URL || "postgres://dahrttupatsgrc:JphS59a9GcRUHnhuHkTbHjvzFu@ec2-107-21-106-196.compute-1.amazonaws.com:5432/d9hupdecqpkcup?ssl=true";

// Set up redirection to router file to hadle routing
app.use('/', routes);
// Start server on Heroku or on localhost:5000 as a fallback
app.listen(process.env.PORT || '5000');
