const User = require("../models/User.js");
const bcrypt = require("bcrypt");

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
                    if (same) {
                        //session islemleri
                        req.session.userID = user._id; // kullanıcın id bilgisinin session.id olarak atanması
                        res.status(200).redirect("/users/dashboard"); //user session
                    }
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
    const user = await User.findOne({ _id: req.session.userID });
    res.status(200).render("dashboard", {
        pageName: "dashboard",
        user: user
    })
}