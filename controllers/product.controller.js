const Product = require('../models/product.model')

exports.test = function(req, res) {
    res.send('Greetings from the Test controller')
}

exports.product_create = function(req, res) {
    let product = new Product(
        {
            name: req.body.name,
            price: req.body.price
        }
    )
    product.save(function(err){
        if(err) {
            return next(err)
        }
        res.send('Product created successfully.')
    })
}
// findByIdAndUpdate
exports.product_update = function(req, res) {
    console.log(req.body)
    Product.findByIdAndUpdate(req.params.id, {$set: req.body},
        function(err, product) {
            if(err) return next(err)
            res.send('Product updated')
        })
}

exports.product_delete = (req, res) => {
    console.log(req.body)
    Product.findByIdAndRemove(req.params.id, (err) => {
        if(err) return next(err)
        res.send(`${req.params.id} Deleted successfully.`)
    })
}

exports.product_list = (req, res) => {
    console.log(`Showing all products`)
    Product.find()
        .then((products) => {
            res.render('index', {title: 'Product List', products})
        })
        .catch(() => { res.send('Sorry!') })
}