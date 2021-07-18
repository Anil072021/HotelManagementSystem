let model = require("../model/admin");
let jwt = require("jsonwebtoken");
let router = {};

router.register_user = function (req, res) {
  let ip = req.body.params;
  if (!ip.user_name && !ip.email && !ip.password && !ip.phone_number) {
    res.status(200).send(
      JSON.stringify({
        status: "error",
        message: "All Conditions are not meet...",
      })
    );
  }
  model.register_user(ip, function (err, resp) {
    if (err) {
      res.status(200).send(
        JSON.stringify({
          status: "error",
          message: "Could not submit the query",
        })
      );
    } else {
      res.status(200).send(JSON.stringify({ status: "success", result: resp }));
    }
  });
};

router.login_user = function (req, res) {
  let ip = req.body.params;
  console.log("controller");
  if (!ip.email && !ip.password) {
    res.status(200).send(
      JSON.stringify({
        status: "error",
        message: "All conditions are not meet...",
      })
    );
  }
  model.login_user(ip, (err, resp) => {
    if (err) {
      res.status(200).send(
        JSON.stringify({
          status: "error",
          message: "Could not be submit the query",
        })
      );
    } else {
      res.status(200).send(
        JSON.stringify({
          status: "success",
          result: { data: resp, token: resp.token },
        })
      );
    }
  });
};

router.checkCredentials = function (req, res, cb) {
  const token = req.headers["authorization"];
  if (typeof token == "undefined") {
    res
      .status(401)
      .send(JSON.stringify({ status: "error", message: "Unauthorized user" }));
    cb(false);
  } else {
    jwt.verify(token, "oillirb", (err, res) => {
      // console.log("token verif", token);
      if (err) {
        if (err.name == "TokenExpiredError") {
          status = "Token is expried. Can you please login in again.";
        } else {
          status = "Error" + err;
        }
      } else {
        req.token = token;
        // next();
        status = "autherized";
        cb(status);
      }
    });
  }
};

router.getHotels = function (req, res) {
  let ip = req.body.cmd;
  model.getHotels(ip, function (err, resp) {
    if (err) {
      res.status(200).send(
        JSON.stringify({
          status: "error",
          message: "Unable to process the query" + err,
        })
      );
    } else {
      res.status(200).send(JSON.stringify({ status: "success", result: resp }));
    }
  });
};

router.hotel_booking = function (req, res) {
  var ip = req.body.params;
  if (
    !ip.user_name &&
    !ip.id &&
    !ip.email &&
    !ip.in_the_name_of &&
    !ip.room_type &&
    !ip.no_of_persons &&
    !ip.check_in_time &&
    !ip.check_out_time &&
    !ip.no_of_rooms
  ) {
    res
      .status(200)
      .send(
        JSON.stringify({ status: "error", message: "Check all conditions" })
      );
  }
  model.hotel_booking(ip, (err, resp) => {
    if (err) {
      res.status(200).send(
        JSON.stringify({
          status: "error",
          message: "Unable to process your query" + err,
        })
      );
    } else {
      res.status(200).send(JSON.stringify({ status: "success", result: resp }));
    }
  });
};

module.exports = router;
