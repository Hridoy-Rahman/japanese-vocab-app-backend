require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes.js");
const lessonRoutes = require("./routes/lessonsRoutes.js"); 
const vocabularyRoutes = require("./routes/vocabularyRoutes.js"); 

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

// Routes
app.use("/auth", authRoutes);
app.use("/lessons", lessonRoutes);
app.use("/vocabulary", vocabularyRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
