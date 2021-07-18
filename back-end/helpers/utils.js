var config = require("../config.json");
var mailgun = require("mailgun-js")({
  apiKey: config.email.apiKey,
  domain: config.email.domain,
});

exports.sendMail = function (to, cc, bcc, from, sub, mailTxt, mailHtml, cb) {
  var mailOptions = {
    from: from,
    to: to,
    subject: sub,
  };
  if (bcc) {
    mailOptions["bcc"] = bcc;
  }
  if (cc) {
    mailOptions["cc"] = cc;
  }
  if (mailHtml) {
    mailOptions["html"] = mailHtml;
  } else {
    mailOptions["text"] = mailTxt;
  }

  var alldata = {
    url: config.email.apiUrl,
    fromData: mailOptions,
    auth: { user },
  };
};
