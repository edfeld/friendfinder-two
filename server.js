// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
const htmlRoutes = require('./app/routing/htmlRoutes');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT  || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Routes
// =============================================================

let val = htmlRoutes(app); // val is "Hello"  

// app.get("/", function(req, res) {
//     res.sendFile(path.join(__dirname, "app/public/home.html"));
//   });

//   app.get("/survey", function(req, res) {
//     res.sendFile(path.join(__dirname, "app/public/survey.html"));
//   });

app.get("/api/")

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });