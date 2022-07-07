const User = require("../models/User.js");
const bcrypt = require("bcrypt");
const Category = require("../models/Category.js");
const Course = require("../models/Course.js");

exports.createUser = async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).redirect("/login")

    } catch (error) {
        res.status(400).json({
            status: "fail",
            error
        })
    }
}

exports.loginUser = (req, res) => {
    try {
        const { email, password } = req.body;

        User.findOne({ email: email }, (err, user) => {
            if (user) {
                bcrypt.compare(password, user.password, (err, same) => {
                    //session islemleri
                    req.session.userID = user._id; // kullanıcın id bilgisinin session.id olarak atanması
                    res.status(200).redirect("/users/dashboard"); //user session

                })
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
    res.status(200).render("dashboard", {
        pageName: "dashboard",
        user: user,
        categories: categories,
        courses: courses
    })
}