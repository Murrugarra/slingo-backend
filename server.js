var express = require('express'),
bodyParser = require('body-parser'),
cors = require('cors'),
app = express(),
port = process.env.PORT || 3000;

app.use(cors());

// configure body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// DATABASE SETUP
var mongoose   = require('mongoose');
mongoose.connect('mongodb://localhost:32768/SlingoDB'); // connect to our database

// Handle the connection event
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  console.log("DB connection alive");
});

var router = express.Router();
require('./app/routes').config(router)
app.use('/api', router);


app.listen(port);
console.log('Slingo API server started on: ' + port);
