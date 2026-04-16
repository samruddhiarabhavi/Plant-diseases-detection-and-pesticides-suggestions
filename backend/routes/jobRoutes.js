const express = require("express");
const router = express.Router();
const Job = require("../models/Job");

// POST JOB
router.post("/add", async (req, res) => {
  try {
    const job = new Job(req.body);
    await job.save();
    res.json({ message: "Job posted", job });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;