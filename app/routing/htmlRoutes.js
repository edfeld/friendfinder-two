
var path = require("path");

var htmlRoutes = function(app, currDirName) {

    app.get("/", function(req, res) {
        res.sendFile(path.join(currDirName, "/app/public/home.html"));
      });
    
    app.get("/survey", function(req, res) {
      res.sendFile(path.join(currDirName, "/app/public/survey.html"));
    });

      // console.log("dirName: ", currDirName);
      // console.log("pathJoin: ", path.join(currDirName, "/app/public/home.html"))

}

module.exports = htmlRoutes;

// module.exports = {
//     hello: function() {
//        return "Hello";
//     }
//  }