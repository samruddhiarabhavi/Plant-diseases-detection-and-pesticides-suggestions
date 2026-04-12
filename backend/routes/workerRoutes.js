const express = require("express");
const router = express.Router();
const Worker = require("../models/Worker");


// ➕ ADD WORKER
router.post("/add", async (req, res) => {
  try {
    const worker = new Worker(req.body);
    await worker.save();

    res.json({
      message: "Worker added successfully",
      worker,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


// 📄 GET ALL WORKERS
router.get("/", async (req, res) => {
  try {
    const workers = await Worker.find();
    res.json(workers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


// 🔍 SEARCH WORKERS
router.get("/search", async (req, res) => {
  try {
    const { skill, location } = req.query;

    let query = {};

    if (skill) {
      query.skills = skill;
    }

    if (location) {
      query.location = location;
    }

    const workers = await Worker.find(query);

    res.json(workers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 🔄 UPDATE AVAILABILITY
router.put("/availability/:id", async (req, res) => {
  try {
    const { availability } = req.body;

    const worker = await Worker.findByIdAndUpdate(
      req.params.id,
      { availability },
      { new: true }
    );

    res.json({
      message: "Availability updated",
      worker,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;