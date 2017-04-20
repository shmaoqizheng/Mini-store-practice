var mongoose = require('mongoose');
var Order = mongoose.model('Order');
var Product = mongoose.model('Product');

module.exports = {
    getOrders: function(request, response) {
        Order.find({}).populate('_customer _product').exec(function(err, result) {
            if (err) {
                console.log(err);
            } else {
                response.json(result);
            }
        });
    },

    addOrder: function(request, response) {
        console.log(request.body.productId);
        Product.findById(request.body.productId, function(err, result) {
            console.log(result);
            if (err) {
                console.log(err);
            } else {
                //decrement a product's quantity when an order is placed
                result.quantity -= request.body.quantity;
                result.save(function(err2, result2) {
                    if (err2) {
                        console.log(err2);
                    } else {
                        console.log(result2);
                    }
                });
            }
        });

        var newOrder = new Order({
            _customer: request.body.customerId,
            _product: request.body.productId,
            quantity: request.body.quantity
        });

        newOrder.save(function(err, result) {
            if (err) {
                console.log(err);
            } else {
                Order.find({}).populate('_customer _product').exec(function(err2, result2) {
                    if (err2) {
                        console.log(err2);
                    } else {
                        response.json(result2);
                    }
                });
            }
        });
    }
}
