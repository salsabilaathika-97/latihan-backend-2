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
    const dataParam = req.params;
    const user = userData.find(item => item.id = dataParam.id)
    res.send(user)
})

router.get('/:name', (req, res) => {
    const dataParam = req.params;
    const user = userData.find(item => item.name = dataParam.name)
    res.send(user)
})

module.exports = router;