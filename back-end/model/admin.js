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
      var password = encriptPassword(ip.password);
      db.user
        .find({ email: ip.email, password: password })
        .toArray(function (err, res) {
          console.log("checking", res, err);
          if (err && err === null) {
            err = "Invalid Credentials";
            cb(null, err);
          } else {
            if (res.length > 0) {
              jwt.sign(
                { user_name: res.user_name },
                "oillirb",
                (err, token) => {
                  res.token = token;
                  cb(null, res);
                }
              );
              // cb(null, res);
            }
          }
        });
    });
};

exports.getHotels = function (ip, cb) {
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
      console.log("hotels");
      db.hotels.find({}).toArray(function (err, res) {
        if (err) {
          cb(null, err);
        } else {
          cb(null, res);
        }
      });
    });
};

exports.hotel_booking = (ip, cb) => {
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
      var id = ObjectID(ip.id);
      db.user.find({ _id: id }).toArray(function (err, res) {
        if (err) {
          cb(null, err);
        } else {
          if (res.length > 0) {
            next(res);
          } else {
            cb(null, "");
          }
        }
      });
    })
    .then(function (next, res) {
      // console.log("res", res);
      ip.check_in_time = new Date(ip.check_in_time);
      ip.check_out_time = new Date(ip.check_out_time);
      db.booking_details.save(ip, function (err, res) {
        if (err) {
          cb(null, err);
        } else {
          cb(null, res);
        }
      });
    });
};
