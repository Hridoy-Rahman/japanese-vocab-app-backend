const express = require("express");
const { createLesson, getLessons, updateLesson, deleteLesson } = require("../controllers/lessonController.js");


const router = express.Router();

// Lesson Routes
router.post("/", createLesson);
router.get("/", getLessons);
router.put("/:lessonId", updateLesson);
router.delete("/:lessonId", deleteLesson);

module.exports = router;
