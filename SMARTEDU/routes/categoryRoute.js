const express = require("express");
const router = express.Router();

const categoryRoute = require("../controllers/categoryController.js");

router.post("/", categoryRoute.createCategory);        // http://localhost:3000/categories

module.exports = router;
