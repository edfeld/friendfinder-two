
var path = require("path");

module.exports = {
  
  htmlRoutes: (app, currDirName) => {
    
    
    app.get("/", function(req, res) {
      res.sendFile(path.join(currDirName, "/app/public/home.html"));
    });
    
    app.get("/survey", function(req, res) {
      res.sendFile(path.join(currDirName, "/app/public/survey.html"));
    });
    
    //If no matching route is found default to home
    // app.get("*", function(req, res) {
    //     res.sendFile(path.join(__dirname, "../public/home.html"));
    // });

      // console.log("dirName: ", currDirName);
      // console.log("pathJoin: ", path.join(currDirName, "/app/public/home.html"))
      
  } 
    
}
