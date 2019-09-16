const express = require('express');
const bodyParser = require('body-parser');
const PouchDB = require('pouchdb');
// create express app
const app = express();

// Require tweet routes
require('./app/routes/tweet.routes.js')(app);

const request = require('request');

//var sqlite = require('sqlite-sync');
 
//Connecting
//sqlite.connect('myDatabase.db');
 
//Create example table
//sqlite.run("CREATE TABLE COMPANYS(amount, date);");

PouchDB.plugin(require('pouchdb-adapter-memory'));
var db = new PouchDB('dbname', {adapter: 'memory'});

/*
db.put({
    _id: 'mydoc',
    title: 'Heroes'
  }).then(function (response) {
    // handle response
  }).catch(function (err) {
    console.log(err);
  });
*/

request('http://localhost:8080/totals/byHour', { json: true }, (err, res, body) => {
  if (err) { return console.log(err); }
  console.log(body.url);
  console.log(body);
  db.bulkDocs(body).then(function (result) {
    // handle result
    
  }).catch(function (err) {
    console.log(err);
  });
});

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "Welcome to Twiterr Test chalenge."});
});

// listen for requests
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});