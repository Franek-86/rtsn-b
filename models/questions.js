const mongoose = require("mongoose");

const QuestionsSchema = new mongoose.Schema({
  category: {
    type: String,
    required: [true, "must provide  category name"],
    trim: true,
    // maxlength: [20, "name can not be more than 20 characters"],
  },
  question: {
    type: String,
    required: [true, "must provide question"],
    trim: true,
    // maxlength: [20, "name can not be more than 20 characters"],
  },
  correct_answer: {
    type: String,
    required: [true, "must provide answer"],
    trim: true,
    // maxlength: [20, "name can not be more than 20 characters"],
  },
  incorrect_answers: {
    type: Array,
    required: [true, "must provide incorrect answers"],
    trim: true,
    // maxlength: [20, "name can not be more than 20 characters"],
  },
});

module.exports = mongoose.model("QA", QuestionsSchema);
