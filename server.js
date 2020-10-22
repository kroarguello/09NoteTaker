//Dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const htmlRoutes = require("./routes/htmlRoutes");
const apiRoutes = require("./routes/apiRoutes");

const app = express(); //using express server
const PORT = process.env.PORT || 8080; //Port


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use("/api",apiRoutes);
app.use("/",htmlRoutes);

//require('./js/index')(app);  Router file??

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });

  