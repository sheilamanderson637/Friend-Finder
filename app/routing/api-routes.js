//Load Data
//==========================================================
var friendList = require('../data/friends.js');

// GET route to display a JSON of all possible friends
//============================================================
module.exports = function(app) {
    app.get('./friends', function (req, res) {
        res.json(friendList);
  });

    app.post('api/friends', function (req, res) {

    var bestFriend = {
        name: " ",
        photo: " ",
        difference: Infinity
    }

// Runs through all current friends in list
//=============================================================

    for(var i = 0; i < friendList.length; i++){
      var scoresDiff = 0;

// Runs through scores to compare friends
//=============================================================
      for(var j = 0; j < newFriend.length; j++){
        scoresDiff += (Math.abs(parseInt(friendList[i].scores[j]) - parseInt(newFriend[j])));
      }

// Pushes results into scoresArray
//=============================================================
      scoresArray.push(scoresDiff);
    }

// Find the best match after all friends are compared
//=============================================================
    for(var i = 0; i < scoresArray.length; i++){
      if(scoresArray[i] <= scoresArray[bestMatch]){
        bestMatch = i;
      }
    }

// Returns the best match
//============================================================
    var bestFriend = friendList[bestMatch];
    res.json(bestFriend);

// Pushes new data into the friends array
//===========================================================
    friendList.push(req.body);
  });
}