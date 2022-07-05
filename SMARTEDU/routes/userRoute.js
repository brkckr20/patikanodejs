const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/authMiddleware.js");

const authController = require("../controllers/authController.js");

router.post("/signup", authController.createUser);        // http://localhost:3000/users/signup
router.post("/login", authController.loginUser);          // http://localhost:3000/users/login
router.get("/logout", authController.logoutUser);          // http://localhost:3000/users/logout
router.get("/dashboard", authMiddleware, authController.getDashboardPage);          // http://localhost:3000/users/dashboard

module.exports = router;
