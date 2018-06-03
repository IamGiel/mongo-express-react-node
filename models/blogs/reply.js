const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const replySchema = new Schema({
    name: { type: String, required: true },
    text: { type: String, required: true },
    date: { type: Date, default: Date.now },
  });

  const Reply = mongoose.model("Reply", replySchema);
  
  module.exports = Reply;