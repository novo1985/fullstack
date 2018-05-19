// import express library using keyword "require"
const express = require('express');

// using express to create a single application
const app = express();

// create route handler: two arguments '/' and arrow function
app.get('/', (req, res) => {
  res.send({ hi: 'there' });
});

// setup the dynamic port for Heroku
const PORT = process.env.PORT || 5000;
app.listen(PORT);
// test app by http://localhost:5000/
