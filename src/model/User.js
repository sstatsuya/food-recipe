const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = new Schema({
  _id: { type: String, required: true },
  name: { type: String },
  username: { type: String },
  password: { type: String, select: false },
  token: { type: String },
  level: { type: Number },
  avatar: { type: String },
});
module.exports = mongoose.model("Users", User);
