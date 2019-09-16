module.exports = (app) => {
    const tweet = require('../controllers/tweet.controller.js');

    app.get('/tweet/topFive', tweet.topFiveFollowers);

    app.get('/tweet/byHour', tweet.totalPostByHours);

    app.get('/tweet/byUserIdiomCOuntry', tweet.totalPostByUserIdiomCountry);

}