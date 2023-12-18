const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: {
    type: String,
    default: "visitor",
  },
  token: {
    type: String,
    default: null,
  },
});

const userModel = mongoose.model("users", userSchema);
module.exports = userModel;
