let express = require('express')
let mongoose = require('mongoose')
let bodyParser = require('body-parser')
let cors = require('cors')
let app = express()
let port = process.env.PORT || 3000

// express config
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// database connection
mongoose.connect('mongodb://localhost:32768/SlingoDB', {useMongoClient: true})
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("DB connection alive")
})

// rounting config
var router = express.Router();
require('./app/routes').config(router)
app.use('/api', router);


// app kickoff
app.listen(port);
console.log('Slingo API server started on: ' + port);
