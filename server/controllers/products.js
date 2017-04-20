var mongoose = require('mongoose');
var Product = mongoose.model('Product');

module.exports = {
    getProducts: function(request, response) {
        Product.find({}, function(err, result) {
            if (err) {
                console.log(err);
            } else {
                response.json(result); //send all products as an array
            }
        });
    },

    addProduct: function(request, response) {
        var newProduct = new Product({
            name: request.body.name,
            imageUrl: request.body.imageUrl,
            description: request.body.description,
            quantity: request.body.quantity
        });

        newProduct.save(function(err, result) {
            if (err) {
                console.log(err);
            } else {
                response.json(result);
            }
        });
    }
}
