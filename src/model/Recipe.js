const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Recipe = new Schema({
  _id: { type: String, required: true },
  name: { type: String },
  intro: { type: String },
  time: { type: Number },
  number: { type: Number },
  level: { type: String },
  tutorial: { type: String },
  image: { type: String },
  ingredients: { type: Array },
  types: { type: Array },
});
module.exports = mongoose.model("recipes", Recipe);
