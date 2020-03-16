const express = require('express')
const bodyParser = require('body-parser')

const app = express()

const product = require('./routes/product.route')
app.use('/products', product)


let port = 3000

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})