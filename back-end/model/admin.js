let sequence = require("sequence").Sequence;
let encript = require("crypto");
let ObjectID = require("mongodb").ObjectID;
let database = require("./database");
var jwt = require("jsonwebtoken");

var encriptPassword = (password) => {
  var password = encript
    .createHmac("sha512", password)
    .update(password)
    .digest("hex");
  return password;
};

exports.register_user = function (ip, cb) {
  var db;
  var seq = sequence.create();
  seq
    .then(function (next) {
      database.getdb(function (err, dbref) {
        if (err) {
          process.exit(1);
        } else {
          db = dbref;
          next();
        }
      });
    })
    .then(function (next) {
      if (ip.password) {
        ip.password = encriptPassword(ip.password);
      }
      ip.create_date = new Date();
      db.user.save(ip, function (err, res) {
        if (err) {
          cb(null, err);
        } else {
          cb(null, res);
        }
      });
    });
};

exports.login_user = function (ip, cb) {
  let db;
  let seq = sequence.create();
  seq
    .then(function (next) {
      database.getdb(function (err, dbref) {
        if (err) {
          process.exit(1);
        } else {
          db = dbref;
          next();
        }
      });
    })
    .then(function (next) {
      ip.password = encriptPassword(ip.password);
      db.user
        .find({ email: ip.email, password: ip.password })
        .toArray(function (err, res) {
          if (err) {
            cb(null, err);
          } else {
            // if (res) {
            //   jwt.sign({ email: ip.eamil }, "oillirb", (err, token) => {
            //     console.log(token, "token");
            //     res["token"] = token;
            //   });
            //   cb(null, res);
            // }
            next(res);
          }
        });
    })
    .then(function (next, res) {
      jwt.sign({ user_name: res.user_name }, "oillirb", (err, token) => {
        res.token = token;
        cb(null, res);
      });
    });
};
