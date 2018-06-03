const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const responseSchema = new Schema({
    name: { type: String, required: true },
    text: { type: String, required: true },
    date: { type: Date, default: Date.now },
    replies: [{ type: Schema.Types.ObjectId, ref: "Reply" }]
  });

  const Response = mongoose.model("Response", responseSchema);
  
  module.exports = Response;
