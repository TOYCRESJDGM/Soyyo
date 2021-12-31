const cors = require('cors');
const morgan = require("morgan");
const express = require("express");
const bodyParser = require('body-parser');
const apiRouter = require('./routes/api');
require('dotenv').config();

//instance of express in the app
const app = express();
app.use(cors());

//settings
app.use(morgan('dev'));
app.set('port', process.env.PORT);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//routes
app.use(apiRouter);

app.listen(app.get('port'), (error) => {
    if (!error) {
        console.log(`Server on port http://localhost:${app.get('port')}`);
    } else {
        console.log(error);
    }
});

module.exports = app;
