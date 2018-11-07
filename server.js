// Dependencies
// =============================================================
var express = require("express");
// var path = require("path");
const htmlRoutes = require('./app/routing/htmlRoutes');
const apiRoutes = require('./app/routing/apiRoutes');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT  || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/app/public'));
app.use(express.json());


// Routes
// =============================================================

let val = htmlRoutes.htmlRoutes(app, __dirname); // Call to htmlRoutes
let val1 = apiRoutes(app);


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });