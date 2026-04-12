const express = require("express");
const router = express.Router();
const Application = require("../models/Application");


// ➕ APPLY FOR JOB
router.post("/apply", async (req, res) => {
  try {
    const { workerId, jobId } = req.body;

    const application = new Application({
      workerId,
      jobId,
    });

    await application.save();

    res.json({
      message: "Applied successfully",
      application,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


// 📄 GET APPLICATIONS FOR A JOB
router.get("/job/:jobId", async (req, res) => {
  try {
    const applications = await Application.find({
      jobId: req.params.jobId,
    }).populate("workerId");

    res.json(applications);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;