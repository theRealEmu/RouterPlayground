var express = require("express");
var app  = express();

app.get("*", function(req, res) {
  res.sendFile(__dirname + "/public/router.html");
});

app.listen(7000, () => {
  console.log("Listening on Port 7000");  
});