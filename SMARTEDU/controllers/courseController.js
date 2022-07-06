const Category = require("../models/Category.js");
const Course = require("../models/Course.js");

exports.createCourse = async (req, res) => {
    try {
        const course = await Course.create({
            name: req.body.name,
            description: req.body.name,
            category: req.body.category,
            user: req.session.userID // eklenen kursun oturum açmış öğretmen bilgisi ile kaydolması işlemi
        });
        /* res.status(201).json({
            status: "success",
            course: course
        }) */

        res.status(201).redirect("/courses")

    } catch (error) {
        res.status(400).json({
            status: "fail",
            error
        })
    }
}

exports.getAllCourses = async (req, res) => {
    try {

        const categorySlug = req.query.categories;
        const category = await Category.findOne({ slug: categorySlug });
        let filter = {};
        if (categorySlug) {
            filter = { category: category._id };
        }

        const courses = await Course.find(filter).sort("-createdAt");
        const categories = await Category.find();
        res.status(200).render("courses", {
            courses: courses,
            categories: categories,
            pageName: "courses"
        })

    } catch (error) {
        /* res.status(400).json({
            status: "fail",
            error
        }) */
        console.log(error)
    }
}

exports.getCourse = async (req, res) => {
    try {
        const course = await Course.findOne({ slug: req.params.slug }).populate("user")
        res.status(200).render("course", {
            course: course,
            pageName: "course"
        })

    } catch (error) {
        res.status(400).json({
            status: "fail",
            error
        })
    }
}