const router = require("express").Router();
const bloggerController = require("../../controllers/bloggerController");

// Matches with "/blogging"
router
  .route("/")
  .get(bloggerController.findAll)
  .post(bloggerController.create);

router.route("/response")
  .post(bloggerController.addResponse);

router.route("/reply")
  .post(bloggerController.addReply)

router
  .route("/:id")
  .get(bloggerController.findById)
  .put(bloggerController.update)
  .post(bloggerController.save)
  .delete(bloggerController.remove);

module.exports = router;
