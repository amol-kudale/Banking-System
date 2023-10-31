const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
  username: String,
  accNumber: Number,
  amount: Number,
  Date: String,
});

const transactionModel = mongoose.model("transaction", transactionSchema);

module.exports = transactionModel;
