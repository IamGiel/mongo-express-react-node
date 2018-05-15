const router = require("express").Router();
const bloggerRoutes = require("./blogger");

// Book routes
router.use("/bloggers", bloggerRoutes);

module.exports = router;
