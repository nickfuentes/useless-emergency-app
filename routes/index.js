var express = require("express");
var router = express.Router();
const models = require("../models");

/* GET home page. */
router.get("/", (req, res, next) => {
  res.render("index", {
    title: "Useless Emergency App"
  });
});

router.get("/login", (req, res, next) => {
  res.render("login", {
    title: "Useless Emergency App"
  });
});

router.post("/login", async (req, res, next) => {
  const user = await models.User.findOne({
    where: {
      name: req.body.username,
      password: req.body.password
    }
  });
  const userJSON = JSON.stringify(user);
  if (userJSON != "null") {
    req.session.user = userJSON;
    res.redirect("/");
  } else {
    res.redirect("/login");
  }
});

router.get("/register", (req, res, next) => {
  res.render("register", {
    title: "Useless Emergency App"
  });
});

router.post("/register", async (req, res, next) => {
  const user = await models.User.build({
    name: req.body.username,
    password: req.body.password
  });
  await user.save();
  const userJSON = JSON.stringify(user);
  console.log(userJSON);
  if (userJSON != "null") {
    req.session.user = userJSON;
    res.redirect("/login");
  } else {
    res.redirect("/register");
  }
});

router.get("/emergency", (req, res, next) => {
  res.render("form", {
    title: "Useless Emergency App"
  });
});

router.get("/emergency/display", (req, res, next) => {
  res.render("emergency", {
    title: "Useless Emergency App"
  });
});

module.exports = router;
