const Photo = require("../models/Photo.js");
const fs = require("fs");


exports.getAllPhotos = async (req, res) => {
    const photos = await Photo.find({}).sort('-createdAt');
    res.render("index", {
        photos: photos
    });
}

exports.getPhoto = async (req, res) => {
    const photo = await Photo.findById(req.params.id);
    res.render("photo", {
        photo
    });
}

exports.createPhoto = async (req, res) => {

    //public altında uploads klasörü yoksa oluştur.
    const uploadDir = "public/uploads";
    if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir)
    }

    //dosyanın bilgilerinin yakalanması
    let uploadedImage = req.files.image;
    //foto nun yükleneceği yolun belirlenmesi
    let uploadPath = __dirname + "/../public/uploads/" + uploadedImage.name

    //yükleme işlemi ile beraber dosyanın server'e taşınması ve dosya yolunun kaydedilmesi işlemi
    uploadedImage.mv(uploadPath, async () => {
        await Photo.create({
            ...req.body,
            image: "/uploads/" + uploadedImage.name
        });
        res.redirect("/");
    })
}


exports.updatePhoto = async (req, res) => {
    const photo = await Photo.findOne({ _id: req.params.id });
    photo.title = req.body.title;
    photo.description = req.body.description;
    photo.save();

    res.redirect(`/photos/${req.params.id}`);
}


exports.deletePhoto = async (req, res) => {
    const photo = await Photo.findOne({ _id: req.params.id }); // silinecek fotoğrafın bulunması
    //bulunan fotoğrafın dosya yolunun belirlenmesi
    let deletedImage = __dirname + "/../public" + photo.image; // ---->  /uploads/pexels-mike-b-170811.jpg 
    //fotoğrafında diskten senkron bir şekilde silinmesi
    fs.unlinkSync(deletedImage);
    //fotoğrafın dosya yolunun veritabanından silinmesi
    await Photo.findByIdAndRemove(req.params.id);
    res.redirect("/")
}

