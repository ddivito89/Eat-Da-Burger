var express = require("express");
var router = express.Router();

var burger = require("../models/burger.js")

router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var resObject = {
      burgers: data
    };
    console.log(resObject);
    res.render("index", resObject);
  });
});






module.exports = router;
