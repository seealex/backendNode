const service = require('../services/tweet.load.js');

exports.topFiveFollowers = (req, res) => {
    res.send("lol1");
};

exports.totalPostByHours = (req, res) => {
  service.loadByHour()
  .then(function(result) {
    res.send(result);
}, function(err) {
    console.log(err);
})
    
};

exports.totalPostByUserIdiomCountry = (req, res) => {
    res.send("lol3");
};