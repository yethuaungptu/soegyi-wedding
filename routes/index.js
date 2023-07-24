var express = require("express");
var router = express.Router();
var url = require("url");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/invit", function (req, res) {
  var q = url.parse(req.url, true).query;
  res.render("invitation", { name: q.u || "unknown" });
});

module.exports = router;
