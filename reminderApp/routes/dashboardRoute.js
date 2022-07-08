const express = require("express");
const router = express.Router();
const { ensureAuthenticated, isAdmin } = require("../middleware/checkAuth");


//---DASHOARD ROUTE----//
router.get("/", ensureAuthenticated, (req, res) => {
  res.render("dashboard/index", {
    user: req.user,
  });
});

module.exports = router;
