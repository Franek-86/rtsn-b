const express = require("express");
const router = express.Router();
const authenticationMiddleware = require("../middleware/auth");
const {
  getAllQuestions,
  postQuestion,
  getAllQuestionsStatic,
  // userData,
} = require("../controllers/questions");

router.route("/").get(getAllQuestions).post(postQuestion);
// router.route("/rtsn").get(authenticationMiddleware, userData);
router.route("/static").get(getAllQuestionsStatic);
module.exports = router;
