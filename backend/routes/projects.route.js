const express = require("express");
const { projectController } = require("../controllers");

const router = express.Router();

router.get("/", projectController.getProject);
router.post("/", projectController.addProject);
router.put("/:id", projectController.updateProject);
router.delete("/:id",projectController.deleteProject);

module.exports = router;