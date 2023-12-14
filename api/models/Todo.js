const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: Number,
});

const TodoModel = mongoose.model("Todo", TodoSchema);

module.exports = TodoModel;
