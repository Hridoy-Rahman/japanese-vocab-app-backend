const mongoose = require("mongoose");

const VocabularySchema = new mongoose.Schema({
  word: { type: String, required: true },
  pronunciation: { type: String, required: true },
  whenToSay: { type: String, required: true },
  meaning: { type: String, required: true },
  lessonNo: { type: Number, required: true },
  createdBy: { type: String, required: true }, 
});

module.exports = mongoose.model("Vocabulary", VocabularySchema);
