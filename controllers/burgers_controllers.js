const express = require("express");

var router = express.Router();

const burger = require("../models/burger.js");

//create router

router.get("/", function (req, res) {
  burger.selectAll(function (data) {
    var newObject = {
      burgers: data,
    };
    res.render("index", newObject);
  });
});

router.post("/burgers", function (req, res) {
  burger.insertOne(["burger_name"], [req.body.burger_name], function (result) {
    res.redirect("/");
  });
});

router.put("/burgers/:id", function (req, res) {
  var condition = "id = " + req.params.id;

  burger.updateOne(
    {
      devoured: true,
    },
    condition,
    function (result) {
        res.status(200).end();
    }
  );
});
module.exports = router;
