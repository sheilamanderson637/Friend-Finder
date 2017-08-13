//Load Data
// ==========================================================
var friendList = require('../data/friends.js');

// GET route to display a JSON of all possible friends
//============================================================
module.exports = function(app) {
    app.get('./friends', function (req, res) {
        res.json(friendList);
  });

    app.post('api/friends', function (req, res) {

    var bestFriend = {
        name: "",
        photo: "",
        difference: Infinity
    }

//runs through all current friends in list
    for(var i = 0; i < friendList.length; i++){
      var scoresDiff = 0;

//run through scores to compare friends
      for(var j = 0; j < newFriend.length; j++){
        scoresDiff += (Math.abs(parseInt(friendList[i].scores[j]) - parseInt(newFriend[j])));
      }

//push results into scoresArray
      scoresArray.push(scoresDiff);
    }

//after all friends are compared, find best match
    for(var i = 0; i < scoresArray.length; i++){
      if(scoresArray[i] <= scoresArray[bestMatch]){
        bestMatch = i;
      }
    }

//return bestMatch data
    var bff = friendList[bestMatch];
    res.json(bff);

//pushes new submission into the friendsList array
    friendList.push(req.body);
  });
}