const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const urlencodedParser = bodyParser.urlencoded({extended: false});

app.use("/", function (request, response) {
  response.sendFile(__dirname + "/index.html");
});
app.use("/:bad", urlencodedParser, function (request, response) {
  response.send("<h1>Page not found!</h1>");
});

app.listen(process.env.PORT || 3000);
