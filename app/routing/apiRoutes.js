//
const friends = require('../data/friends');
const questions = require('../data/questions');

let Friends = new friends();
let apiRoutes = function (app) {
    
    // console.log("friends data: ", friends.arrFriends);
    //  A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
    app.get("/api/friends", function(req, res) {
      console.log("get Friends from friends.js: ", friends());
      return res.json(Friends.getFriends());
    });

    app.get("/api/questions", function(req, res) {
      console.log("get questions from questions.js: ", questions());
      return res.json(questions());
    });
    
    // A POST routes `/api/friends`. This will be used to handle incoming survey results. 
    // This route will also be used to handle the compatibility logic. 
    app.post("/api/friend", function(req, res) {
        // req.body hosts is equal to the JSON post sent from the user
        // This works because of our body parsing middleware
        var newFriend = req.body;
      
        // Using a RegEx Pattern to remove spaces from newFriend
        // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
        // newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();
      
        console.log(newFriend);
      
        friends.arrFriends.push(newFriend);
      
        res.json(newFriend);
      });

}

  module.exports = apiRoutes;