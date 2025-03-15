const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const router = express.Router();

// ✅ User Registration
router.post("/register", async (req, res) => {
  const { name, email, password, skills, causes } = req.body;

  const existingUser = await User.findOne({ where: { email } });
  if (existingUser)
    return res.status(400).json({ msg: "Email already in use" });

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
    skills,
    causes,
  });

  res.status(201).json({ msg: "User registered successfully", user });
});

// ✅ User Login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ where: { email } });
  if (!user) return res.status(400).json({ msg: "User not found" });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });

  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });

  res.json({ token, user });
});

module.exports = router;
