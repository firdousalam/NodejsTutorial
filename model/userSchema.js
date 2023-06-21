const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  first_name: { type: String, default: null },
  last_name: { type: String, default: null },
  email: { type: String, unique: true },
  password: { type: String },
  token: { type: String },
  name: { type: String, default: null },
  age: {
    type: Number,
    default: 0,
  },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;