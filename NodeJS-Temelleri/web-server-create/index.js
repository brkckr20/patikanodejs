const http = require("http");

// server oluşturma işlemi
const server = http.createServer((req, res) => {

    const url = req.url;

    if (url === "/") {
        res.writeHead(200, { "Content-Type": "text/html" })
        res.write("<h2>Anasayfa</h2>");
    } else if (url === "/about") {
        res.write("Hakkimizda sayfasi");
    } else if (url === "/contact") {
        res.write("Iletisim sayfasi");
    } else {
        res.writeHead(404, { "Content-Type": "text/html" })
        res.write("<h2>Sayfa bulunamadi... </h2>");
    }

    res.end();
})

const PORT = 4000;

server.listen(PORT, () => {
    console.log(`Server is running http://localhost:${PORT}`);
})