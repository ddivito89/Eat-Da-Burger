var express = require("express");
var router = express.Router();

var burger = require("../models/burger.js")

router.get("/", function(req, res) {
  burger.all(function(data) {
    var resObject = {
      burgers: data
    };
    console.log(resObject);
    res.render("index", resObject);
  });
});

router.post("/api/addBurger", function(req, res) {
  console.log(req.body)
  burger.add(req.body.burger_name, function(data) {
    res.json({ id: res.insertId });
  });
});

router.put("/api/eatBurger", function(req, res) {
  console.log(req.body)
  burger.eat(req.body.updateId, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});






module.exports = router;
