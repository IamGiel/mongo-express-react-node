const mongoose = require("mongoose");
const db = require("../models/bloggers");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/yap", {
  useMongoClient: true
});

const blogSeed = [
          {
            imgUrl: "https://www.ienglishstatus.com/wp-content/uploads/2018/04/Anonymous-Whatsapp-profile-picture.jpg", 
            name: "Gel", 
            subject: "cookie jars", 
            yap: "Who took the last cookie from the cookie jar!?",
            date: new Date(Date.now())
          },
          {
            imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVSTY_AM9KwNdNcIoquC8wKNXNMW2IZfdPoi0cbm2-gkA2I-K-", 
            name: "Mike", 
            subject: "Election in Tarzus", 
            yap: "I say abandon ship in Tarzus!!!",
            date: new Date(Date.now())
          },
          {
            imgUrl: "http://photodoto.com/wp-content/uploads/2013/01/54-self-portrait.jpg", 
            name: "John", 
            subject: "Boston Celtics", 
            yap: "If only Kyrie is not injured... smh",
            date: new Date(Date.now())
          },
          {
            imgUrl: "http://www.pnas.org/content/pnas/early/2017/12/19/1721196115/F1.large.jpg", 
            name: "Chris", 
            subject: "Tech", 
            yap: "the internet of things... pretty soon I dont have to move a muscle..." ,
            date: new Date(Date.now())
          }
];

db.Blogger.remove({})
  .then(() => db.Blogger.collection.insertMany(blogSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
