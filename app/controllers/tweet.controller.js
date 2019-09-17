const service = require('../services/tweet.load.js');

exports.topFiveFollowers = (req, res) => {
  service.loadtopByFiveFollowers()
    .then(function (result) {
      res.send(result);
    }, function (err) {
      console.log(err);
    })
};

exports.totalPostByHours = (req, res) => {
  service.loadByHour()
    .then(function (result) {
      res.send(result);
    }, function (err) {
      console.log(err);
    })

};

exports.totalPostByUserIdiomCountry = (req, res) => {
  service.loadBybyUserIdiomCountry()
    .then(function (result) {
      res.send(result);
    }, function (err) {
      console.log(err);
    })

};