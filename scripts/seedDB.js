const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/yap",
  {
    useMongoClient: true
  }
);

const bookSeed = [
  {
    name: "Andrew",
    email: "and@mailer.com",
    password: "secretkey",
    date: new Date(Date.now())
  },
  {
    name: "Mike",
    email: "Mkie@mailer.com",
    password: "secretkey",
    date: new Date(Date.now())
  },
  {
    name: "Peter",
    email: "Pete@mailer.com",
    password: "secretkey",
    date: new Date(Date.now())
  },
  {
    name: "Marsha",
    email: "Marsh@mailer.com",
    password: "secretkey",
    date: new Date(Date.now())
  }
];

db.Book
  .remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
