const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send("Hai, ini adalah API ku")
})

const PORT = 9000

app.listen(PORT, () => {
    console.log(`API berjalan di port ${PORT}`);
})