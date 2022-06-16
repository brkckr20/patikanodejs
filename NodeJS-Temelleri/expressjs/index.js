const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.status(200).send('Anasayfa')
})

app.get('/about', (req, res) => {
    res.status(200).send('About')
})

app.get('/contact', (req, res) => {
    res.status(200).send('Contact')
})

app.get('*', (req, res) => {
    res.status(404).send('Sayfa bulunamadı')
})

app.listen(port, () => {
    console.log(`Server is running http://localhost:${port}`)
})