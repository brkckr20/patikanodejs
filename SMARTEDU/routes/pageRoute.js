const express = require("express");
const router = express.Router();
const redirectMiddleware = require("../middlewares/redirectMiddleware.js");


const pageController = require("../controllers/pageController.js");

router.get("/", pageController.getIndexPage);
router.get("/about", pageController.getAboutPage);
router.get("/register", redirectMiddleware, pageController.getRegisterPage);
router.get("/login", redirectMiddleware, pageController.getLoginPage);
router.get("/contact", pageController.getContactPage);
router.post("/contact", pageController.sendEmail);

module.exports = router;
