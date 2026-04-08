const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// test route
app.get("/", (req, res) => {
  res.send("API running");
});

const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);

const workerRoutes = require("./routes/workerRoutes");
app.use("/api/workers", workerRoutes);

const applicationRoutes = require("./routes/applicationRoutes");
app.use("/api/applications", applicationRoutes);

const jobRoutes = require("./routes/jobRoutes");
app.use("/api/jobs", jobRoutes);

module.exports = app;