const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const Tran = require("./models/transaction.js");
const User = require("./models/user.js");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const username = process.env.MONGO_DB_USERNAME;
const password = process.env.MONGO_DB_PASSWORD;

mongoose.connect(
  `mongodb+srv://admin-${username}:${password}@cluster0.rnlqkcn.mongodb.net/?retryWrites=true&w=majority`
);

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/transactions", async function (req, res) {
  const tran = await Tran.find({});
  res.json({ data: tran });
});

app.get("/users", async function (req, res) {
  const user = await User.find({});
  res.json({ userData: user });
});

app.post("/transactions", async function (req, res) {
  const datetime = new Date();
  const { username, acc, amount } = req.body;

  let userFound = await User.findOne({ acc: acc });

  try {
    let userFound = await User.findOneAndUpdate(
      { acc: acc },
      { $inc: { currentBalance: amount } }
    );
    if (userFound) res.status(200).send("Successfull");
    else res.status(404).send("Failure");
  } catch (error) {
    res.status(404).send(error);
  }
  if (userFound != null) {
    const tran = await Tran.create({
      username,
      accNumber: acc,
      amount,
      Date: datetime.toLocaleTimeString() + " " + datetime.toLocaleDateString(),
    });
  }
});

app.listen("4000", function () {
  console.log("Server set at http://localhost:4000");
});
