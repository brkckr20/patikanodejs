const Post = require("../models/Post.js");

exports.getAllPosts = async (req, res) => {

    const posts = await Post.find().sort("-createdAt");
    res.render("index", {
        posts
    })
}

exports.getPost = async (req, res) => {
    const { id } = req.params;
    const post = await Post.findById(id);
    res.render("post", {
        post
    })
}

exports.addPost = async (req, res) => {
    await Post.create(req.body);
    res.redirect("/")
}

exports.updatePost = async (req, res) => {
    const { id } = req.params;
    const post = await Post.findOne({ _id: id });
    post.title = req.body.title;
    post.detail = req.body.detail;
    post.save();
    res.redirect(`/posts/${id}`);
}

exports.deletePost = async (req, res) => {
    const { id } = req.params;
    await Post.findByIdAndDelete(id);
    res.redirect("/");
}