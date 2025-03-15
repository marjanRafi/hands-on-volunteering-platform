const express = require("express");
const HelpRequest = require("../models/HelpRequest");

const router = express.Router();

// ✅ Create a Help Request
router.post("/create", async (req, res) => {
  try {
    const { title, description, createdBy } = req.body;
    const request = await HelpRequest.create({ title, description, createdBy });
    res.status(201).json({ msg: "Help request created successfully", request });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// ✅ Get All Help Requests
router.get("/list", async (req, res) => {
  try {
    const requests = await HelpRequest.findAll();
    res.json(requests);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
