//
const friends = require('../data/friends');
const questions = require('../data/questions');

let Friends = new friends();
let apiRoutes = function (app) {
    
    // console.log("friends data: ", friends.arrFriends);
    //  A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
    app.get("/api/friends", function(req, res) {
      console.log("get Friends from friends.js: ", Friends.getFriends());
      return res.json(Friends.getFriends());
    });

    // A GET route that returns all of the survey questions. 
    app.get("/api/questions", function(req, res) {
      console.log("get questions from questions.js: ", questions());
      return res.json(questions());
    });

    // A GET Route that returns an individual friend when an index value is passed. 
    // This is never called on the client side. 
    app.get("/api/friend/:friendIndex", function(req, res) {
      console.log("here in api/friend: ", req.params.friendIndex);
      return res.json(Friends.getFriend(req.params.friendIndex));
    });

    // A POST routes `/api/friends`. This will be used to handle incoming survey results. 
    // This route will also be used to handle the compatibility logic. 
    app.post("/api/friends", function(req, res) {
        // req.body hosts is equal to the JSON post sent from the user
        // This works because of our body parsing middleware
        var CurrUser = req.body;
        console.log(CurrUser);
        let FriendsArray = Friends.getFriends();
        let arrDifferences = []

        FriendsArray.forEach(friend => {
          let diffVal = 0
          for (let i = 0; i < friend.scores.length; i++) {
            const currUserScore = parseInt(CurrUser.scores[i]);
            const FriendScores = parseInt(friend.scores[i]);
            diffVal += Math.abs(currUserScore - FriendScores )
            console.log("DiffVal: ", diffVal)
          }
          arrDifferences.push(diffVal);

        });
        console.log("arrDifferences: ", arrDifferences);

        // lowest difference index:
        let lowVal =0;
        let lowIndex = 0;
        for (let i = 0; i < arrDifferences.length; i++) {
          if (i === 0) {
            lowVal = arrDifferences[i];
            lowIndex = i;
          } else if (arrDifferences[i] < lowVal ) {
            lowVal = arrDifferences[i];
            lowIndex = i;
          }
          console.log("lowVal: ", lowVal);
          
        }
        console.log("lowVal Final: ")
        res.json(FriendsArray[lowIndex]);
        // console.log("do we get here?");
      });

}

  module.exports = apiRoutes;