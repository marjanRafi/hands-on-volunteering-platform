const express = require("express");
const Team = require("../models/Team");

const router = express.Router();

// ✅ Create a Team
router.post("/create", async (req, res) => {
  try {
    const { name, description, createdBy } = req.body;
    const team = await Team.create({ name, description, createdBy });
    res.status(201).json({ msg: "Team created successfully", team });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// ✅ Get All Teams
router.get("/list", async (req, res) => {
  try {
    const teams = await Team.findAll();
    res.json(teams);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
