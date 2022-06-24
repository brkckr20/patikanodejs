const express = require("express");
const mongoose = require("mongoose");
const ejs = require("ejs");
const app = express();
const fileUpload = require('express-fileupload');
const methodOverride = require('method-override')


//controllers import
const photoControllers = require("./controllers/photoControllers.js");
const pageControllers = require("./controllers/pageControllers.js")

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
app.get("/", photoControllers.getAllPhotos);
app.get("/photos/:id", photoControllers.getPhoto);
app.post("/photos", photoControllers.createPhoto);
app.put("/photos/:id", photoControllers.updatePhoto);
app.delete("/photos/:id", photoControllers.deletePhoto);


app.get("/about", pageControllers.getAboutPage)
app.get("/add", pageControllers.getAddPage)
app.get("/photos/edit/:id", pageControllers.getEditPage);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server http://localhost:${PORT} unda çalıştı.`)
})