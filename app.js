//   const PORT = process.env.PORT || 8080;
const PORT = 8080;
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const proRoutes = require('./routes/professional');

const app = express();
app.use(express.static(path.join(__dirname, 'frontend')));
app.set('views', path.join(__dirname, 'frontend'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});
const cors = require("cors");
app.use(cors());

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', proRoutes);
app.listen(PORT);
