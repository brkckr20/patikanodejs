const express = require("express");
const mongoose = require("mongoose");
const app = express();

const pageRoute = require("./routes/pageRoute.js");
const courseRoute = require("./routes/courseRoute.js");

//db connect
mongoose.connect("mongodb://localhost:27017/smartedu").then(() => console.log("DB connected successfully"));

//template engine
app.set("view engine", "ejs");

//middlewares
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
app.use("/", pageRoute);
app.use("/courses", courseRoute);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`server http://localhost:${PORT} unda başladı`);
})