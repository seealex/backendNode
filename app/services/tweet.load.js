const PouchDB = require('pouchdb');
const request = require('request');

const HOST = 'http://localhost:8080/api';

PouchDB.plugin(require('pouchdb-adapter-memory'));
var dbFollowers = new PouchDB('dbFollowers', {adapter: 'memory'});
var dbUserIdiom = new PouchDB('dbUserIdiom', {adapter: 'memory'});
var dbByHours = new PouchDB('dbByHours', {adapter: 'memory'});


exports.loadByHour = () => {
  var options = {
    url: HOST + '/byHour',
    headers: {
        'User-Agent': 'request',
        'content-type':'application/json'
    }
  };
  
  return new Promise(function(resolve, reject) {

   // dbByHours.allDocs({
   //   include_docs: false,
   //   attachments: false
   // }).then(function (result) {
     // if(result.rows.length === 0){
        request.get(options, function(err, resp, body) {
          if (err) {
              reject(err);
          } else {
            var x = {"docs":body};
           //dbByHours = new PouchDB('dbByHours', {adapter: 'memory'});
           dbByHours.bulkDocs(body).then(function (result) {
             resolve(JSON.parse(x));
           }).catch(function (err) {
             console.log(err);
           });
              
          }
        });
     // } else {
      //  resolve(result.rows);
      //}
    //}).catch(function (err) {
      
   // });
  
       
   });
};

exports.loadtopByFiveFollowers = () => {
  var options = {
    url: HOST + '/topFive',
    headers: {
        'User-Agent': 'request'
    }
  };
  
  return new Promise(function(resolve, reject) {
  
       request.get(options, function(err, resp, body) {
           if (err) {
               reject(err);
           } else {
            dbFollowers.bulkDocs(body).then(function (result) {
              resolve(JSON.parse(body));
            }).catch(function (err) {
              console.log(err);
            });
               
           }
       });
   });
};


exports.loadBybyUserIdiomCOuntry = () => {
  var options = {
    url: HOST + '/byUserIdiomCOuntry',
    headers: {
        'User-Agent': 'request'
    }
  };
  
  return new Promise(function(resolve, reject) {
  
       request.get(options, function(err, resp, body) {
           if (err) {
               reject(err);
           } else {
            dbUserIdiom.bulkDocs(body).then(function (result) {
              resolve(JSON.parse(body));
            }).catch(function (err) {
              console.log(err);
            });
               
           }
       });
   });
};
