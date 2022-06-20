const express = require("express");
const app = express();


app.get("/", (req, res) => {
    const photo = {
        id: 1,
        title: "Photo title",
        desc: "photo desc"
    }
    res.send(photo);
})


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server http://localhost:${PORT} unda çalıştı.`)
})