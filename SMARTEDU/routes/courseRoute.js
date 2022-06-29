const express = require("express");
const router = express.Router();

const courseController = require("../controllers/courseController.js");

router.post("/", courseController.createCourse);        // http://localhost:3000/courses

module.exports = router;