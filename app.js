const createError = require('http-errors');
const path = require('path');
const express = require('express');
const logger = require('morgan');
const {Pool} = require('pg')
require("dotenv").config({ path: "./config/.env" });


// connection_string = process.env.url
// const pgclient = new pg.Client(connection_string)
// pgclient.connect();

const pool = new Pool({
  connectionString: process.env.url,
  ssl: true // if you're using ElephantSQL, you'll need to set this to true
});

const query = {
  text: 'SELECT * FROM info'
};

var app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs')

async function getdbdata() {
  const client = await pool.connect();
  try {
    const res = await client.query(query);
    return res.rows;
  } catch (e) {
    console.error('query error', e.message, e.stack);
  } finally {
    client.release();
  }
}

app.get('/', async (req, res) => {
  try {
    const results = await getdbdata();
    res.render("index.ejs", {db: results});
  } catch (err) {
    console.error(err);
  }
});


app.listen(5000, () =>{
  console.log("server is running on port 5000")
})