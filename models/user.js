// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// const bookSchema = new Schema({
//   title: { type: String, required: true },
//   author: { type: String, required: true },
//   synopsis: String,
//   date: { type: Date, default: Date.now }
// });

// const Book = mongoose.model("Book", bookSchema);

// module.exports = Book;

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: { type: String, required: true },
  lastName: { type: String, required: true },
  email: {
    type: String,
    unique: true,
    match: [/.+\@.+\..+/, "Please enter a valid e-mail address"]
  },
  password: {
    type: String,
    required: true,
    match: [
      /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/,
      "Please enter a valid password"
    ]
  },

  // `date` must be of type Date. The default value is the current date
  userCreated: {
    type: Date,
    default: Date.now
  }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;

// db.bbuser.insert({
//   name: "Steve",
//   lastName: "Moskovitz",
//   email: "steve@mailer.com",
//   password:"1234Steve!",
//   userCreated: Date.now
// });
