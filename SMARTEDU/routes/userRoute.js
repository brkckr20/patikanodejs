const express = require("express");
const router = express.Router();

const authController = require("../controllers/authController.js");

router.post("/signup", authController.createUser);        // http://localhost:3000/users/signup
router.post("/login", authController.loginUser);          // http://localhost:3000/users/login

module.exports = router;
