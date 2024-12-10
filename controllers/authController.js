const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel.js");

exports.register = async (req, res) => {
  const { name, email, password, photo } = req.body;

  try {
    const userExists = await User.findOne({ email });
    if (userExists) return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hashedPassword, photo });

    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};


exports.login = async (req, res) => {
    const { email, password } = req.body;
    console.log(email,password)
  
    try {
      const user = await User.findOne({ email });
      if (!user) return res.status(400).json({ message: "User does not exist" });
  
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });
  
      const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET_KEY, {
        expiresIn: "1h",
      });
  
      res.json({ token, user });
    } catch (error) {
      res.status(500).json({ message: "Server error" });
    }
  };