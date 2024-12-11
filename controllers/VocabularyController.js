
const Vocabulary = require("../models/vocabularyModel.js");

exports.addVocabulary = async (req, res) => {
    try {
      const { word, pronunciation, whenToSay, meaning, lessonNo } = req.body;
  
      const createdBy = req.user?.email || "hridoyrahman715@gmail.com"
  
      const vocabulary = new Vocabulary({
        word,
        pronunciation,
        whenToSay,
        meaning,
        lessonNo,
        createdBy,
      });
  
      await vocabulary.save();
  
      res.status(201).json({ message: "Vocabulary added successfully", vocabulary });
    } catch (error) {
      console.error("Error adding vocabulary:", error);
      res.status(500).json({ message: "Server error", error: error.message });
    }
  };
  
  

exports.getVocabularies = async (req, res) => {
  try {
    const { lessonNo } = req.query;
    const query = lessonNo ? { lessonNo } : {};

    const vocabularies = await Vocabulary.find(query);
    res.json(vocabularies);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

exports.updateVocabulary = async (req, res) => {
  try {
    const { vocabId } = req.params;
    const { word, pronunciation, whenToSay, meaning, lessonNo } = req.body;

    const vocabulary = await Vocabulary.findByIdAndUpdate(
      vocabId,
      { word, pronunciation, whenToSay, meaning, lessonNo },
      { new: true }
    );

    if (!vocabulary) return res.status(404).json({ message: "Vocabulary not found" });

    res.json({ message: "Vocabulary updated successfully", vocabulary });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

exports.deleteVocabulary = async (req, res) => {
  try {
    const { vocabId } = req.params;

    const vocabulary = await Vocabulary.findByIdAndDelete(vocabId);

    if (!vocabulary) return res.status(404).json({ message: "Vocabulary not found" });

    res.json({ message: "Vocabulary deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
