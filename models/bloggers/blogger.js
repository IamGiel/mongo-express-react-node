const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bloggerSchema = new Schema({
  name: { type: String, required: true },
  expertise: { type: String, required: true },
  password: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Blogger = mongoose.model("Blogger", bloggerSchema);

module.exports = Blogger;
