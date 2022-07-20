const User = require("../models/User.js");
const bcrypt = require("bcrypt");
const { validationResult } = require("express-validator");

const Category = require("../models/Category.js");
const Course = require("../models/Course.js");

exports.createUser = async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).redirect("/login")

    } catch (error) {
        const errors = validationResult(req);

        for (let i = 0; i < errors.array().length; i++) {
            req.flash("error", `${errors.array()[i].msg}`)
        }
        /* console.log(errors);
        console.log(errors.array()[0].msg); */
        res.status(400).redirect("/register")
    }
}

exports.loginUser = (req, res) => {
    try {
        const { email, password } = req.body;

        User.findOne({ email: email }, (err, user) => {
            if (user) {
                bcrypt.compare(password, user.password, (err, same) => {

                    if (same) {
                        //session islemleri
                        req.session.userID = user._id; // kullanıcın id bilgisinin session.id olarak atanması
                        res.status(200).redirect("/users/dashboard"); //user session
                    } else {
                        req.flash("error", "Şifrenizi kontrol ediniz!");
                        res.status(400).redirect("/login");
                    }


                })
            } else {
                req.flash("error", "Kullanıcı bulunamadı!");
                res.status(400).redirect("/login");
            }
        });

    } catch (error) {
        res.status(400).json({
            status: "fail",
            error
        })
    }
}

exports.logoutUser = (req, res) => {
    req.session.destroy(() => {
        res.redirect("/");
    })
}


exports.getDashboardPage = async (req, res) => {
    const user = await User.findOne({ _id: req.session.userID }).populate("courses")
    const categories = await Category.find();
    const courses = await Course.find({ user: req.session.userID })
    const users = await User.find();
    res.status(200).render("dashboard", {
        pageName: "dashboard",
        user: user,
        categories: categories,
        courses: courses,
        users: users
    })
}


exports.deleteUser = async (req, res) => {
    try {
        await User.findByIdAndRemove(req.params.id)
        await Course.deleteMany({ user: req.params.id });
        res.redirect("/users/dashboard");
    } catch (error) {
        if (error) {
            console.log(error)
        }
    }
}