const express = require("express");
const app = express();


//template engine set
app.set("view engine", "ejs");

//middlewares
app.use(express.static("public"));


//routes
app.get("/", (req, res) => {
    res.render("index")
});

app.get("/about", (req, res) => {
    res.render("about")
});

app.get("/add_post", (req, res) => {
    res.render("add_post")
});


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server http://localhost:${PORT} unda çalıştı.`)
})