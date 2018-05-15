const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bloggerSchema = new Schema({
  imgUrl: { type: String, required: true, $regex: /^https?:\/\/(?:[a-z0-9\-]+\.)+[a-z]{2,6}(?:\/[^\/#?]+)+\.(?:jpg|gif|png)$/ },
  name: { type: String, required: true },
  subject: { type: String, required: true },
  yap: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Blogger = mongoose.model("Blogger", bloggerSchema);

module.exports = Blogger;
