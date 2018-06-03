const router = require("express").Router();
const bloggerController = require("../../controllers/bloggerController");

// Matches with "/api/books"
router
  .route("/")
  .get(bloggerController.findAll)
  .post(bloggerController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(bloggerController.findById)
  .put(bloggerController.update)
  .post(bloggerController.save)
  .delete(bloggerController.remove);

module.exports = router;
