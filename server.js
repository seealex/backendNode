const express = require('express');
const bodyParser = require('body-parser');
// create express app
const app = express();

// Require tweet routes
require('./app/routes/tweet.routes.js')(app);



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