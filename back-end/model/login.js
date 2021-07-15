var sequence = require("sequence").Sequence;
var encript = require("crypto");
var ObjectID = require("mongodb").ObjectID;
var database = require("./database");

var encriptPassword = (password) => {
  var password = encript
    .createHmac("sha512", password)
    .update(password)
    .digest("hex");
  return password;
};

exports.login_user = function (ip, cb) {
  var db;
  var seq = sequence.create();
  seq
    .then(function (next) {
      database.getdb(function (err, dbref) {
        if (err) {
          process.exit(1);
        } else {
          dbref = db;
          next();
        }
      });
    })
    .then(function (next) {
      ip.password = encriptPassword(ip.password);
      db.user.find(
        { email: ip.email, password: ip.password },
        function (err, res) {
          console.log("res from login component", res, err);
          if (err) {
            cb(null, err);
          } else {
            cb(null, res);
          }
        }
      );
    });
};
