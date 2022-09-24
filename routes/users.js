const express = require("express")
const { v4: uuidv4 } = require('uuid');
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
    userData.push({id: uuidv4(), ...data})
    res.send("Berhasil")
})

router.get('/:id', (req, res) => {
    console.log(req.params);
    const id = req.params
    const user = userData.find(item => item.id = id)
    res.send(user)
})

module.exports = router;