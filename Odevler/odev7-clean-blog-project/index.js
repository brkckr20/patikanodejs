const express = require("express");
const app = express();
const mongoose = require("mongoose");
const methodOverride = require('method-override')

const postControllers = require("./controllers/postControllers.js");
const pageControllers = require("./controllers/pageControllers.js");

mongoose.connect("mongodb://localhost:27017/cleanblog-db");

//template engine set
app.set("view engine", "ejs");

//middlewares
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//formdan gönderilen post işlemini manipüle etmek
app.use(methodOverride('_method', {
    methods: ["POST", "GET"]
}))

//routes
app.get("/", postControllers.getAllPosts);;
app.get("/posts/:id", postControllers.getPost);
app.post("/add_post", postControllers.addPost);
app.put("/edit_post/:id", postControllers.updatePost);
app.delete("/posts/:id", postControllers.deletePost);


app.get("/about", pageControllers.getAboutPage);
app.get("/add_post", pageControllers.getAddPage);
app.get("/edit_post/:id", pageControllers.getEditPage);


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server http://localhost:${PORT} unda çalıştı.`)
})