const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./yappers");
const recipeRoutes = require("./recipes/recipe");

// API Routes
router.use("/newyappers", apiRoutes);
router.use("/search", recipeRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
