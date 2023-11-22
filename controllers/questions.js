const QA = require("../models/questions");
// const { createCustomError } = require("../errors/custom-error");
const { BadRequestError, UnauthenticatedError } = require("../errors");
const jwt = require("jsonwebtoken");
const { StatusCodes } = require("http-status-codes");

const getAllQuestionsStatic = async (req, res, next) => {
  const allQuestions = await QA.find({});
  res.status(200).json({ allQuestions });
};
const getAllQuestions = async (req, res, next) => {
  // console.log(req.user);
  const { location } = req.query;
  // console.log(location);
  let queryObject = {};
  if (location) {
    queryObject.location = { $regex: location, $options: "i" };
  }
  const allQuestions = await QA.find(queryObject);
  res.status(200).json({ allQuestions });
};

const postQuestion = async (req, res) => {
  const question = await QA.create(req.body);
  res.status(201).json({ question });
};

module.exports = {
  getAllQuestions,
  postQuestion,
  getAllQuestionsStatic,
};
