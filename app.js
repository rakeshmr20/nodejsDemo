const express = require('express')
const bodyParser = require('body-parser')

const app = express()

let port = 3000

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})