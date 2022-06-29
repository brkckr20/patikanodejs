const express = require("express");
const router = express.Router();


const pageController = require("../controllers/pageController.js");

router.get("/", pageController.getIndexPage);
router.get("/about", pageController.getAboutPage);

module.exports = router;
