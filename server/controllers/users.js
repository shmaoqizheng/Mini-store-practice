var mongoose = require('mongoose');
var Customer = mongoose.model('Customer');

module.exports = {
    getCustomer: function(request, response) {
        Customer.find({}, function(err, data) {
            if (err) {
                console.log(err);
            } else {
                response.json(data);
            }
        });
    }
}
