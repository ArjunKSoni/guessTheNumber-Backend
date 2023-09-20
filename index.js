const express = require('express')
const app = express()
var cors = require('cors')
const port = process.env.PORT || 4000
require("./connect_mongo")

app.use(cors())
app.use(express.json())
app.use('/api/auth', require('./routes/auth'))
app.get("/", (req, res) => {
    res.send("Guess the number game")
})



app.listen(port, () => {
    console.log(`successfully loaded at ${port}`)
})

module.exports = app;
