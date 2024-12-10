const mongoose = require("mongoose");

const LessonSchema = new mongoose.Schema({
  lessonName: { type: String, required: true },
  lessonNumber: { type: Number, unique: true, required: true },
  vocabCount: { type: Number, default: 0 },
});

module.exports = mongoose.model("Lesson", LessonSchema);
