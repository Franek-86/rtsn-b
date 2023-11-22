require("dotenv").config();
const connectDB = require("./connect");
const questions = require("./questions.json");
const stops = require("./stops.json");
const QA = require("./models/questions");
// const Stop = require("./models/stops");
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    await QA.deleteMany();
    // await Stop.deleteMany();
    await QA.create(questions);
    // await Stop.create(stops);
    console.log("ok");
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
start();
