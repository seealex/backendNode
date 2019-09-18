const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors')
const app = express();

app.use(cors());

require('./app/routes/tweet.routes.js')(app);

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.json({"message": "Welcome to Twitter test chalenge."});
});

app.listen(process.env.PORT || 3000, () => {
    console.log("Server is listening on port 3000");
});
