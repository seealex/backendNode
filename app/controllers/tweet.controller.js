const Tweet = require('../models/tweet.model.js');
const PouchDB = require('pouchdb');
PouchDB.plugin(require('pouchdb-adapter-memory'));

var db = new PouchDB('dbname', {adapter: 'memory'});

exports.topFiveFollowers = (req, res) => {
    res.send("lol1");
};

exports.totalPostByHours = (req, res) => {
    db.allDocs({
        include_docs: true,
        attachments: true
      }).then(function (result) {
        // handle result
        console.log(result.rows);
        res.send(result.rows);
      }).catch(function (err) {
        console.log(err);
      });
    
};

exports.totalPostByUserIdiomCountry = (req, res) => {
    res.send("lol3");
};