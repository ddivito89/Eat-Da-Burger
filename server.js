var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");

var PORT = process.env.PORT || 8080;

//init express
var app = express();
app.use(express.static("public"));

//init bodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//init handlebare
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");
app.use(routes);


// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
