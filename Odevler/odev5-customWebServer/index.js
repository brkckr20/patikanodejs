const http = require("http");

const server = http.createServer((req, res) => {
    const { url } = req;
    if (url === "/") {
        res.writeHead(200, { "Content-Type": "text/html" })
        res.write("<h2>Anasayfa goruntuleniyor..</h2>")
    } else if (url === "/hakkimda") {
        res.writeHead(200, { "Content-Type": "text/html" })
        res.write("<h2>Hakkimda sayfasi goruntuleniyor...</h2>")
    } else if (url === "/iletisim") {
        res.writeHead(200, { "Content-Type": "text/html" })
        res.write("<h2>Iletisim sayfasi goruntuleniyor...</h2>")
    }

    res.end();
})


const PORT = 5000;

server.listen(PORT, () => {
    console.log("Server is on port http://localhost:" + PORT);
})