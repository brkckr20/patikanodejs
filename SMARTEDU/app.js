const express = require("express");
const mongoose = require("mongoose");
const app = express();

//routing

const pageRoute = require("./routes/pageRoute.js");
const courseRoute = require("./routes/courseRoute.js");
const categoryRoute = require("./routes/categoryRoute.js");
const userRoute = require("./routes/userRoute.js");

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
app.use("/categories", categoryRoute);
app.use("/users", userRoute);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`server http://localhost:${PORT} unda başladı`);
})