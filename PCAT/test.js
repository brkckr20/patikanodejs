const mongoose = require("mongoose");

const Schema = mongoose.Schema;


//connect
mongoose.connect("mongodb://localhost:27017/pcat-testt-db");


//create schema
const PhotoSchema = new Schema({
    title: String,
    description: String
});

const Photo = mongoose.model("Photo", PhotoSchema);


//create photo
/* 
Photo.create({
    title: "Photo 2 title",
    description: "Photo 2 description"
}) */


//read photo
/* Photo.find({}, (err, data) => {
    console.log(data);
}) */

//update photo
/* const id = "62b1736295c5dec8929eed4f";
Photo.findByIdAndUpdate(id, { title: "Photo 1 ttitle updated 2" }, { new: true }, (err, data) => { //new : true objesi güncellenmiş veriyi görmemizi sağlar.
    console.log(data)
}) */


//delete a photo
const id = "62b1736295c5dec8929eed4f";
Photo.findByIdAndDelete(id, (err, data) => {
    console.log(id + " nolu photo deleted successfully!");
})