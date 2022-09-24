const express = require('express')

const app = express()

const userRouter = require('./routes/users')

app.use(express.json())
app.use("/users", userRouter)


const PORT = 9000

app.listen(PORT, () => {
    console.log(`API berjalan di port ${PORT}`);
})