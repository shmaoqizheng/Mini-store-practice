var mongoose = require('mongoose');
var Customer = mongoose.model('Customer');

module.exports = {
    getCustomers: function(request, response) {
        Customer.find({}, function(err, result) {
            if (err) {
                console.log(err);
            } else {
                response.json(result);
            }
        });
    },
    addCustomer: function(request, response) {
        Customer.find({name: request.body.name}, function(err, result) {
            console.log(result);
            if (err) {
                console.log(err);
            } else if (result != []) {
                var newCustomer = new Customer({
                    name: request.body.name
                });
                newCustomer.save(function(err, result) {
                    if (err) {
                        console.log(err);
                    } else {
                        response.json(result);
                    }
                });
            } else {
                response.json({exists: true});
            }
        })
    },
    removeCustomer: function(request, response) {
        Customer.findById(request.body.id, function(err, result) {
            if (err) {
                console.log(err);
            } else {
                result.remove(function(err2, result2) {
                    if (err) {
                        console.log(err);
                    } else {
                        response.json(result2);
                    }
                });
            }
        })
    }
}
