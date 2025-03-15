const express = require("express");
const Event = require("../models/Event");

const router = express.Router();

// ✅ Create Event
router.post("/create", async (req, res) => {
  const { title, description, date, location, category, organizerId } =
    req.body;

  const event = await Event.create({
    title,
    description,
    date,
    location,
    category,
    organizerId,
  });

  res.status(201).json({ msg: "Event created successfully", event });
});

// ✅ Get All Events
router.get("/list", async (req, res) => {
  const events = await Event.findAll();
  res.json(events);
});

module.exports = router;
