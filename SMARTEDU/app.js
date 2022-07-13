const express = require("express");
const mongoose = require("mongoose");
const app = express();
const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');

//routing
const pageRoute = require("./routes/pageRoute.js");
const courseRoute = require("./routes/courseRoute.js");
const categoryRoute = require("./routes/categoryRoute.js");
const userRoute = require("./routes/userRoute.js");

//db connect
mongoose.connect("mongodb://localhost:27017/smartedu").then(() => console.log("DB connected successfully"));

//template engine
app.set("view engine", "ejs");


//global variable - session işlemleri için
global.userIN = null;

//middlewares
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
    secret: 'my_keyboard_cat',
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({ mongoUrl: 'mongodb://localhost/smartedu' }) //session işlemlerinin veritabanında tutulması için eklendi
}));
app.use(flash());
app.use((req, res, next) => {
    res.locals.flashMessages = req.flash(); //ilgili olan templatte kullanabilmek için
    next();
})



//routes
app.use("*", (req, res, next) => { // tüm isteklerde kullan
    userIN = req.session.userID;
    next();
})
app.use("/", pageRoute);
app.use("/courses", courseRoute);
app.use("/categories", categoryRoute);
app.use("/users", userRoute);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`server http://localhost:${PORT} unda başladı`);
})