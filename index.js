const express = require('express')
const app = express()

app.listen(3000, () => {
    console.log("Server está rodandoo na porta 3000")
});

app.get("/", (req, res) => {
    res.send("Hello ftom Node API Server")
});