const express = require('express')
const app = express()

const userRouter = require('./routes/users')

// app.get('/', (req, res) => {
//     res.send("Hai, ini adalah API ku")
// })

app.use("/users", userRouter)

const PORT = 9000

app.listen(PORT, () => {
    console.log(`API berjalan di port ${PORT}`);
})