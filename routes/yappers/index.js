const router = require("express").Router();
const bookRoutes = require("./yappers");

// Book routes
router.use("/yappers", bookRoutes);

module.exports = router;

// workflow
//server.js defines routes
//routes define endpoints
