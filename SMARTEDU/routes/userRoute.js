const express = require("express");
const router = express.Router();

const authController = require("../controllers/authController.js");

router.post("/signup", authController.createUser);        // http://localhost:3000/users/signup

module.exports = router;
