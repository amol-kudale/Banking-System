const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  acc: Number,
  currentBalance: Number,
});

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
