var express = require("express");
var app = express();
var port = 3636;
var controller = require("./controller/admin");
var model = require("./model/admin");
var bodyParser = require("body-parser");
var config = require("./config.json");
var cors = require('cors');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  let cmd = req.body.cmd;
  if (cmd && config.ignoreApis.indexOf(cmd) != -1) {
    next();
    return;
  }
  controller.checkCredentials(req, res, (status) => {
    console.log("cmd comming here", status);
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
