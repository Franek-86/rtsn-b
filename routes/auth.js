const express = require("express");
const router = express.Router();
// const authenticationMiddleware = require("../middleware/auth");
const { login, register } = require("../controllers/auth");

// router
//   .route("/")
//   .get(authenticationMiddleware, getAllQuestions)
//   .post(postQuestion);
router.route("/login").post(login);
router.route("/register").post(register);
// router.route("/rtsn").get(authenticationMiddleware, userData);
module.exports = router;
