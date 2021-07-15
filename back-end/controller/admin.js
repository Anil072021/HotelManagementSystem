let model = require("../model/admin");

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

module.exports = router;
