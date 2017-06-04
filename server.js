// DEPENDENCIES
// ===============================================================================
var express = require("express");
var bodyParser = require("body-parser");

// EXPRESS APP
// ===============================================================================
var app = express();
var PORT = process.env.PORT || 8181;

// BodyParser makes it possible for our server to interpret data sent to it.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Require Routes
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


// Start listener
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});