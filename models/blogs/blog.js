const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogSchema = new Schema({
  imgUrl: { type: String, required: true },   //EH: This should be moved into a user schema
  name: { type: String, required: true },  //EH: This should be moved into a user schema
  subject: { type: String, required: true },
  yap: { type: String, required: true, min: 2, max: 30 },
  score: { type: Number, required: true },
  date: { type: Date, default: Date.now },
  responses: [{ type: Schema.Types.ObjectId, ref: "Response" }]
});

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
