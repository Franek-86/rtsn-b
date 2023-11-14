const QA = require("../models/questions");
// const { createCustomError } = require("../errors/custom-error");
const { BadRequestError, UnauthenticatedError } = require("../errors");
const jwt = require("jsonwebtoken");
const { StatusCodes } = require("http-status-codes");
const User = require("../models/users");

const getAllQuestionsStatic = async (req, res, next) => {
  const allQuestions = await QA.find({});
  res.status(200).json({ allQuestions });
};
const getAllQuestions = async (req, res, next) => {
  // console.log(req.user);
  const { category } = req.query;
  // console.log(category);
  let queryObject = {};
  if (category) {
    queryObject.category = { $regex: category, $options: "i" };
  }
  const allQuestions = await QA.find(queryObject);
  res.status(200).json({ allQuestions });
};

const postQuestion = async (req, res) => {
  const question = await QA.create(req.body);
  res.status(201).json({ question });
};
const register = async (req, res) => {
  const user = await User.create({ ...req.body });
  const token = user.createJWT();
  res
    .status(StatusCodes.CREATED)
    .json({ user: { username: user.username }, token });
};

const login = async (req, res) => {
  const { username, password } = req.body;
  // mongoose validation
  // Joi
  // check in the controller

  if (!username || !password) {
    throw new BadRequestError("Please provide email and password");
  }

  const user = await User.findOne({ username });
  if (!user) {
    throw new UnauthenticatedError("Invalid Credentials");
  }
  const isPasswordCorrect = await user.comparePassword(password);
  if (!isPasswordCorrect) {
    throw new UnauthenticatedError("Invalid Credentials");
  }
  // compare password
  const token = user.createJWT();
  res.status(StatusCodes.OK).json({ user: { name: user.username }, token });
};
const userData = async (req, res) => {
  console.log(req.user);
  res.status(StatusCodes.OK).json({ msg: "get rtsn" });
};

module.exports = {
  getAllQuestions,
  postQuestion,
  getAllQuestionsStatic,
  login,
  register,
  userData,
};
