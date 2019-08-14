var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", {
    title: "Useless Emergency App"
  });
});

router.get("/login", function(req, res, next) {
  res.render("login", {
    title: "Useless Emergency App"
  });
});

router.post("/login", function(req, res, next) {
    
    res.render("login", {
      title: "Useless Emergency App"
    });
  });

router.get("/register", function(req, res, next) {
  res.render("register", {
    title: "Useless Emergency App"
  });
});

router.get("/emergency", function(req, res, next) {
  res.render("emergency", {
    title: "Useless Emergency App"
  });
});

router.get("/emergency/display", function(req, res, next) {
  res.render("info", {
    title: "Useless Emergency App"
  });
});

module.exports = router;
