const express = require("express");
const mongoose = require("mongoose");
const ejs = require("ejs");
const app = express();



// db connect
mongoose.connect("mongodb://localhost:27017/pcat-db");

//MODELS IMPORT
const Photo = require("./models/Photo.js");




//template engine
app.set("view engine", "ejs")


/********************************************************************************* */
//MIDDLEWARES
//statik klasör oluşturma
app.use(express.static('public'));
//formdan gönderilen verilerin okunabilmesi işlemi
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
/********************************************************************************* */


// ROUTES
app.get("/", async (req, res) => {
    const photos = await Photo.find({});
    res.render("index", {
        photos: photos
    });
})

app.get("/about", (req, res) => {
    res.render("about");
})

app.get("/add", (req, res) => {
    res.render("add");
})

app.post("/photos", async (req, res) => {
    await Photo.create(req.body);
    res.redirect("/");
})


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server http://localhost:${PORT} unda çalıştı.`)
})