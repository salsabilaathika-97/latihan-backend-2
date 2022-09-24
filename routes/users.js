const express = require("express")

const router = express.Router()

const userData = [
    {
        id: 1,
        name: "Salsa",
        address: "Banjarmasin"
    }
]

router.get('/', (req, res) => {
    res.send(userData)
})

router.post('/', (req, res) => {
    const data = req.body;
    console.log(data);
    res.send("Berhasil")
    userData.push(data)
})

module.exports = router;