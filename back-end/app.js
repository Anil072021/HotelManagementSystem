var express = require("express");
var app = express();
var port = 3636;
var controller = require("./controller/admin");
var model = require("./model/admin");
var bodyParser = require("body-parser");
var config = require("./config.json");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function (req, res, next) {
  let cmd = req.body.cmd;
  if (cmd && config.ignoreApis.indexOf(cmd) != -1) {
    next();
    return;
  }
  controller.checkCredentials(req, res, (status) => {
    console.log("cmd comming here");
    if (!status) {
      return;
    }
    next();
  });
});

app.get("/", (req, res) => {
  res.status(404).send("get is not working");
});

app.post("/web", (req, res) => {
  if (!req.body.cmd) {
    res.status(404).send("");
    return;
  }
  var cmd = req.body.cmd;
  if (controller[cmd]) {
    controller[cmd](req, res);
  } else {
    res.status(404).send("");
  }
});

app.listen(port, () => {
  console.log("Server listening port " + port);
});
