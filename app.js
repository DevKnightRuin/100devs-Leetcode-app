const createError = require('http-errors');
const path = require('path');
const express = require('express');
const logger = require('morgan');
const { setEngine } = require('crypto');
const {db} = require('./data/db')

var app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs')

app.get('/', (req, res) =>{
  res.render("index.ejs", {db: db})
})

app.listen(5000, () =>{
  console.log("server is running")
})