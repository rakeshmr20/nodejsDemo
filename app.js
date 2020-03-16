const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const product = require('./routes/product.route')

let db_url = 'mongodb://localhost:27017/products'

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use('/products', product)

mongoose.Promise = global.Promise
mongoose.connect(db_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to database")
}).catch(err => {
    console.log("Error connecting to database. ", err)
    process.exit()
})

let port = 3000

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})