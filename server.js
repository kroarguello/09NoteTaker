//Dependencies
const express = require('express');
const path = require('path');
const fs = require('fs');
const http = require('http');

const app = express(); //using express server
const PORT = process.env.PORT || 8080; //Port


app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get('/', (req, res) => {
    const filePath = path.join(__dirname, 'public/index.html');
    return res.sendFile(filePath);
});

app.get('/notes', (req, res) => {
    const filePath = path.join(__dirname, 'public/notes.html');
    return res.sendFile(filePath);
});


app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });

  module.exports = app;