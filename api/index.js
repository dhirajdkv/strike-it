const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Todo = require("./models/Todo.js");

require("dotenv").config();
const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.get("/api/todo", async (req, res) => {
  mongoose.connect(process.env.MONGO_URL);
  try {
    res.status(200).json(await Todo.find());
  } catch (e) {
    res.status(422).json(e);
  }
});

app.post("/api/todo", async (req, res) => {
  mongoose.connect(process.env.MONGO_URL);
  const { name, category } = req.body;

  try {
    const todoItem = await Todo.create({
      name,
      category,
    });
    res.status(200).json(todoItem);
  } catch (e) {
    res.status(422).json(e);
  }
});

app.delete("/api/todo/:id", async (req, res) => {
  mongoose.connect(process.env.MONGO_URL);
  const { id } = req.params;

  try {
    const todoItem = await Todo.deleteOne({ _id: id });
    res.status(200).json(todoItem);
  } catch (e) {
    res.status(422).json(e);
  }
});

app.listen(8080);
