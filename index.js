const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const product = require('./routes/product.route')

let db_url = 'mongodb://localhost:27017/products'

const app = express()
app.set('views', './views')
app.set('view engine', 'pug')
app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use('/products', product)

mongoose.Promise = global.Promise
mongoose.connect(db_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => {
    console.log("Successfully connected to database")
}).catch(err => {
    console.log("Error connecting to database. ", err)
    process.exit()
})

let port = 8080

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})