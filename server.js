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

// Routes
// =============================================================

// Basic route
// =============================================================
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

// Survey route
//=============================================================
app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "survey.html"));
});

// Display list of all friends
// ===========================================================
app.get("/api/friendList", function(req, res) {
  res.json(friendList);
});

// Create new friend - takes in JSON input
// ===========================================================
app.post("/api/friendList", function(req, res) {
  var newFriend = req.body;

  console.log(newFriend);

  friendList.push(newFriend);

  res.json(newFriend);

});


// Start
// =============================================================
app.listen(PORT, function () {
	console.log('App listening on PORT ' + PORT);
});
