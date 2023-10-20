require("dotenv").config();
require('./config/connection')
const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const morgan = require('morgan')
const index = require('./route/indexRoute');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'))
app.use('/', index);

app.listen(port, () => {
    console.log(`listing to the port ${port}`);
});
