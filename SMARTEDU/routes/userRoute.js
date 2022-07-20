const express = require("express");
const router = express.Router();
const User = require("../models/User.js");
const { body } = require('express-validator');

const authMiddleware = require("../middlewares/authMiddleware.js");

const authController = require("../controllers/authController.js");

router.post("/signup",
    [
        body("name").not().isEmpty().withMessage("Lütfen isim giriniz!"),

        body("email").isEmail().withMessage("Lütfen geçerli bir mail adresi giriniz!").custom((userEmail) => {
            return User.findOne({ email: userEmail }).then((user) => {
                if (user) {
                    return Promise.reject("Bu mail ile daha önce kayıt olunmuş!")
                }
            })
        }),

        body("password").not().isEmpty().withMessage("Lütfen parola giriniz!")
    ]
    , authController.createUser);        // http://localhost:3000/users/signup
router.post("/login", authController.loginUser);          // http://localhost:3000/users/login
router.get("/logout", authController.logoutUser);          // http://localhost:3000/users/logout
router.get("/dashboard", authMiddleware, authController.getDashboardPage);          // http://localhost:3000/users/dashboard
router.delete("/:id", authController.deleteUser);

module.exports = router;
