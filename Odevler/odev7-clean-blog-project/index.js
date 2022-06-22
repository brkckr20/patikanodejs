const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Post = require("./models/Post.js");


mongoose.connect("mongodb://localhost:27017/cleanblog-db");


//template engine set
app.set("view engine", "ejs");

//middlewares
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//routes
app.get("/", async (req, res) => {
    const posts = await Post.find();
    res.render("index", {
        posts
    })
});

app.get("/about", (req, res) => {
    res.render("about")
});

app.get("/add_post", (req, res) => {
    res.render("add_post")
});

app.post("/add_post", async (req, res) => {
    await Post.create(req.body);
    res.redirect("/")
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server http://localhost:${PORT} unda çalıştı.`)
})