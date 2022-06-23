const express = require("express");
const mongoose = require("mongoose");
const ejs = require("ejs");
const app = express();
const fileUpload = require('express-fileupload');
const fs = require("fs");
const methodOverride = require('method-override')



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
// dosya yükleme işlemi
app.use(fileUpload());
//formdan gönderilen post işlemini manipüle etmek
app.use(methodOverride('_method', {
    methods: ["POST", "GET"]
}))
/********************************************************************************* */


// ROUTES
app.get("/", async (req, res) => {
    const photos = await Photo.find({}).sort('-createdAt');
    res.render("index", {
        photos: photos
    });
})

app.get("/photos/:id", async (req, res) => {
    const photo = await Photo.findById(req.params.id);
    res.render("photo", {
        photo
    });
})

app.get("/about", (req, res) => {
    res.render("about");
})

app.get("/add", (req, res) => {
    res.render("add");
})

app.post("/photos", async (req, res) => {

    //public altında uploads klasörü yoksa oluştur.
    const uploadDir = "public/uploads";
    if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir)
    }

    //dosyanın bilgilerinin yakalanması
    let uploadedImage = req.files.image;
    //foto nun yükleneceği yolun belirlenmesi
    let uploadPath = __dirname + "/public/uploads/" + uploadedImage.name

    //yükleme işlemi ile beraber dosyanın server'e taşınması ve dosya yolunun kaydedilmesi işlemi
    uploadedImage.mv(uploadPath, async () => {
        await Photo.create({
            ...req.body,
            image: "/uploads/" + uploadedImage.name
        });
        res.redirect("/");
    })



});

app.get("/photos/edit/:id", async (req, res) => {
    const photo = await Photo.findOne({ _id: req.params.id });
    res.render("edit", {
        photo
    });
});

app.put("/photos/:id", async (req, res) => {
    const photo = await Photo.findOne({ _id: req.params.id });
    photo.title = req.body.title;
    photo.description = req.body.description;
    photo.save();

    res.redirect(`/photos/${req.params.id}`);
});

app.delete("/photos/:id", async (req, res) => {
    const photo = await Photo.findOne({ _id: req.params.id }); // silinecek fotoğrafın bulunması
    //bulunan fotoğrafın dosya yolunun belirlenmesi
    let deletedImage = __dirname + "/public" + photo.image; // ---->  /uploads/pexels-mike-b-170811.jpg 
    //fotoğrafında diskten senkron bir şekilde silinmesi
    fs.unlinkSync(deletedImage);
    //fotoğrafın dosya yolunun veritabanından silinmesi
    await Photo.findByIdAndRemove(req.params.id);
    res.redirect("/")
});




const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server http://localhost:${PORT} unda çalıştı.`)
})