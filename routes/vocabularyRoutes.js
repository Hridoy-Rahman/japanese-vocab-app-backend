const express = require("express");
const { addVocabulary, getVocabularies, updateVocabulary, deleteVocabulary } = require("../controllers/VocabularyController.js");


const router = express.Router();


// Vocabulary Routes
router.post("/", addVocabulary);
router.get("/", getVocabularies);
router.put("/:vocabId", updateVocabulary);
router.delete("/:vocabId", deleteVocabulary);



module.exports = router;
