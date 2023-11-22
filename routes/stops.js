const express = require("express");
const router = express.Router();
const authenticationMiddleware = require("../middleware/auth");
const {
  getAllStops,
  getStop,

  // userData,
} = require("../controllers/stops");

router.route("/all").get(getAllStops);
router.route("/").get(getStop);

module.exports = router;
