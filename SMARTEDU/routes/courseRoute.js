const express = require("express");
const router = express.Router();

const courseController = require("../controllers/courseController.js");
const roleMiddleware = require("../middlewares/roleMiddleware.js")

router.post("/", roleMiddleware(["teacher", "admin"]), courseController.createCourse);        // http://localhost:3000/courses
router.get("/", courseController.getAllCourses);
router.get("/:slug", courseController.getCourse);        // http://localhost:3000/courses/:id

module.exports = router;
