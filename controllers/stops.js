const QA = require("../models/questions");
// const { createCustomError } = require("../errors/custom-error");
const { BadRequestError, UnauthenticatedError } = require("../errors");
const jwt = require("jsonwebtoken");
const { StatusCodes } = require("http-status-codes");
const Stop = require("../models/stops");

const getAllStops = async (req, res, next) => {
  const getStops = await Stop.find({});
  res.status(200).json({ getStops });
};
const getStop = async (req, res, next) => {
  const locationIndex = req.query.stop;
  const getStop = await Stop.find({ stop: locationIndex });
  res.status(200).json({ stop: getStop });
};

module.exports = {
  getAllStops,
  getStop,
};
