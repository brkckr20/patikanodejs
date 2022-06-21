const express = require("express");
const ejs = require("ejs");
const app = express();




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
app.get("/", (req, res) => {
    res.render("index");
})

app.get("/about", (req, res) => {
    res.render("about");
})

app.get("/add", (req, res) => {
    res.render("add");
})

app.post("/photos", (req, res) => {
    console.log(req.body);
    res.redirect("/");
})


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server http://localhost:${PORT} unda çalıştı.`)
})