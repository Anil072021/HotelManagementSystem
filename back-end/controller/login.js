let login = require("../model/login");
let router = {};

router.login_user = function (req, res) {
  var ip = req.body.params;
  if (!ip.email && !ip.password) {
    res.status(200).send("All Conditions are not meet...");
  }
  login.login_user(ip, function (err, resp) {
    if (err) {
      res.status(200).send({ status: "ERROR", result: err });
    } else {
      res.status(200).send({ status: "SUCCESS", result: resp });
    }
  });
};

module.exports = router;
