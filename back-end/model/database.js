"use strict";

let database = {};
let mongodb = require("mongodb");
let config = require("../config.json");
let dbref = null;

database.getdb = function (next) {
  if (!dbref) {
    mongodb.MongoClient.connect(config.dburl, function (err, client) {
      if (err) {
        console.log("Unable to connect to the database");
        next(err, null);
      } else {
        const db = client.db("hotel-management");
        dbref = {
          db: db,
          user: db.collection("user"),
        };
        db.collection("user").createIndex(
          { email: 1, phone_number: 1 },
          { unique: true },
          function (err) {
            if (err)
              console.log("ERROR", "Unable to create unique index for user");
          }
        );
        next(null, dbref);
      }
    });
  } else {
    next(null, dbref);
  }
};

module.exports = database;
