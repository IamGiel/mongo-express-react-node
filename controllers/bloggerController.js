const db = require("../models/blogs");

module.exports = {
  findAll: function (req, res) {
    db.Blog.find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Blog.findById(req.params.id).populate({
      path: 'responses',
      populate: { path: 'replies' }
    })
      .then(dbModel => {
        res.json(dbModel);
      })
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    db.Blog.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function (req, res) {
    console.log("THIS IS REQ PARAMS >>> ", req);
    db.Blog.findOneAndUpdate({ _id: req.params.id }, { $inc: { score: 1 } })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  save: function (req, res) {
    db.Blog.save({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Blog.findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  addResponse: (req, res) => {
    const blogId = req.body.blogId;
    const text = req.body.response;
    let name;
    if (!req.session) {
      name = "Anonymous"
    } else {
      name = req.session.user.name;
    }
    db.Response.create({ name, text }).then(response => {
      db.Blog.findOneAndUpdate(
        { _id: blogId },
        { $push: { responses: response } },
        { new: true }
      ).then(() => res.json({ response }))
        .catch(console.error)
    })
  },
  addReply: (req, res) => {
    const responseId = req.body.responseId;
    const text = req.body.reply;
    let name;
    if (!req.session) {
      name = "Anonymous"
    } else {
      name = req.session.user.name;
    }
    db.Reply.create({ name, text }).then(reply => {
      db.Response.findOneAndUpdate(
        { _id: responseId },
        { $push: { replies: reply } },
        { new: true }
      ).then((data) => {
        res.json({ reply })
      })
        .catch(console.error)
    })

  },
};
