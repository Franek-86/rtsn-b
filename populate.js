require("dotenv").config();
const connectDB = require("./connect");
const questions = require("./questions.json");
const QA = require("./models/questions");
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    await QA.deleteMany();
    await QA.create(questions);
    console.log("ok");
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
start();
