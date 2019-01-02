const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

const app = express();

app.set('view engine', 'ejs');

app.get('/index',function(req, res){
    res.render('index');
});

