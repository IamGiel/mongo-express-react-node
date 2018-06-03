const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bloggerSchema = new Schema({
  imgUrl: { type: String, required: true },
  name: { type: String, required: true },
  subject: { type: String, required: true },
  yap: { type: String, required: true, min:2, max: 30 },
  score: { type: Number, required: true },
  date: { type: Date, default: Date.now }
});

const Blogger = mongoose.model("Blogger", bloggerSchema);

module.exports = Blogger;
