const express = require("express");
const app = express();

//template engine
app.set("view engine", "ejs");

//middlewares
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.status(200).render("index", {
        pageName: "index"
    });
})

app.get("/about", (req, res) => {
    res.status(200).render("about", {
        pageName: "about"
    });
})

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`server http://localhost:${PORT} unda başladı`);
})