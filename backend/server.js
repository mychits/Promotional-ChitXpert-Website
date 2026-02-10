const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// DB connection
mongoose
  .connect("mongodb://127.0.0.1:27017/mychits") // local DB
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

// routes
app.use("/api/signup", require("./routes/signup.js"));

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
