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

module.exports = router;