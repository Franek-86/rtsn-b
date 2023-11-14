const connectDB = require("./connect");
const express = require("express");
require("express-async-errors");
const question = require("./routes/questions");
const errorHandlerMiddleware = require("./middleware/error-handler");
const notFound = require("./middleware/not-found");

const app = express();
require("dotenv").config();
// extra security packages

const cors = require("cors");
const authenticationMiddleware = require("./middleware/auth");

let url = process.env.MONGO_URI;
let port = process.env.PORT || 8000;
app.use(cors());
app.use(express.static("../public"));
app.use(express.json());
app.use("/api/v1/questions", question);
app.use(notFound);
app.use(errorHandlerMiddleware);

app.all("*", (req, res) => {
  res.status(404).send("<h1>resource not found</h1>");
});

const start = async () => {
  try {
    await connectDB(url);
    app.listen(port, () => {
      console.log(`server is listening on port ${port} `);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
