// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up express to handle static files
//==============================================================
app.use(express.static(path.join(__dirname, 'app/public')));

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Require routes
//=============================================================
require("./app/routing/api-routes")(app);
require("./app/routing/html-routes")(app);

// Start
//=============================================================
app.listen(PORT, function () {
    console.log('App listening on PORT ' + PORT);
});
