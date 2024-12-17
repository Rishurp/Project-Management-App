const express = require("express");
const router = express.Router();
const projectRoutes = require("./projects.route")


router.use("/projects",projectRoutes)

module.exports = router