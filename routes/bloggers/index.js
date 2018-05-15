const router = require("express").Router();
const bloggerRoutes = require("./blogger.js");

// Book routes
router.use("/blogging", bloggerRoutes);

module.exports = router;
