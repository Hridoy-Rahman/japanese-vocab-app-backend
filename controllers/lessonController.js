const Lesson = require("../models/lessonModel.js");

exports.createLesson = async (req, res) => {
  try {
    const { lessonName, lessonNumber,vocabCount } = req.body;

    const lessonExists = await Lesson.findOne({ lessonNumber });
    if (lessonExists) return res.status(400).json({ message: "Lesson already exists" });

    const lesson = new Lesson({ lessonName, lessonNumber,vocabCount });
    await lesson.save();

    res.status(201).json({ message: "Lesson created successfully", lesson });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

exports.getLessons = async (req, res) => {
  try {
    const lessons = await Lesson.find();
    res.json(lessons);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

exports.updateLesson = async (req, res) => {
  try {
    const { lessonId } = req.params;
    const { lessonName, lessonNumber,vocabCount } = req.body;

    const lesson = await Lesson.findByIdAndUpdate(
      lessonId,
      { lessonName, lessonNumber,vocabCount },
      { new: true }
    );

    if (!lesson) return res.status(404).json({ message: "Lesson not found" });

    res.json({ message: "Lesson updated successfully", lesson });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

exports.deleteLesson = async (req, res) => {
  try {
    const { lessonId } = req.params;

    const lesson = await Lesson.findByIdAndDelete(lessonId);

    if (!lesson) return res.status(404).json({ message: "Lesson not found" });

    res.json({ message: "Lesson deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
