const service = require('../services/tweet.load.js');
const PouchDB = require('pouchdb');
const request = require('request');

const HOST = 'https://tweeitback.herokuapp.com/api';

PouchDB.plugin(require('pouchdb-adapter-memory'));
var dbByHours = new PouchDB('dbByHours', {
  adapter: 'memory'
});
var dbFollowers = new PouchDB('dbFollowers', {
  adapter: 'memory'
});
var dbUserIdiom = new PouchDB('dbUserIdiom', {
  adapter: 'memory'
});
var dbByHours = new PouchDB('dbByHours', {
  adapter: 'memory'
});


exports.loadByHour = () => {
  return new Promise(function (resolve, reject) {
    dbByHours.allDocs({
      include_docs: true,
      attachments: false
    }).then(function (result) {
      if (result.rows.length === 0) {
        request(HOST + '/byHour', {
          json: true
        }, (err, res, body) => {

          dbByHours.bulkDocs(body).then(function (result) {
            resolve(body);
          }).catch(function (err) {

          });
        });
      } else {
        var rows = result.rows.map((i) => {
          return {
            amount: i.doc.amount,
            date: i.doc.date
          };
        });
        resolve(rows);
      }
    }).catch(function (err) {

    });


  });
};

exports.loadtopByFiveFollowers = () => {
  return new Promise(function (resolve, reject) {

    dbFollowers.allDocs({
      include_docs: true,
      attachments: false
    }).then(function (result) {
      if (result.rows.length === 0) {
        request(HOST + '/topFive', {
          json: true
        }, (err, res, body) => {

          dbFollowers.bulkDocs(body).then(function (result) {
            resolve(body);
          }).catch(function (err) {

          });
        });
      } else {
        var rows = result.rows.map((i) => {
          return {
            id: i.doc.id,
            screenName: i.doc.screenName,
            followers: i.doc.followers
          }
        });
        resolve(rows);
      }
    }).catch(function (err) {

    });

  });

};


exports.loadBybyUserIdiomCountry = () => {

  return new Promise(function (resolve, reject) {

    dbUserIdiom.allDocs({
      include_docs: true,
      attachments: false
    }).then(function (result) {
      if (result.rows.length === 0) {
        request(HOST + '/byUserIdiomCOuntry', {
          json: true
        }, (err, res, body) => {

          dbUserIdiom.bulkDocs(body).then(function (result) {
            resolve(body);
          }).catch(function (err) {

          });
        });
      } else {
        var rows = result.rows.map((i) => {
          return {
            tweets: i.doc.tweets,
            hastTag: i.doc.hastTag,
            idiom: i.doc.idiom
          }
        });
        resolve(rows);
      }
    }).catch(function (err) {

    });

  });
};
