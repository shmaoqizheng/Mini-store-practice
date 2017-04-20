var mongoose = require('mongoose');
//require controllers
var customers = require('../controllers/customers.js');
var products = require('../controllers/products.js');
var orders = require('../controllers/orders.js')

module.exports = function(app) {
    app.get('/getCustomers', function(request, response) {
        customers.getCustomers(request, response);
    });

    app.post('/addCustomer', function(request, response) {
        customers.addCustomer(request, response);
    });

    app.post('/removeCustomer', function(request, response) {
        customers.removeCustomer(request, response);
    });

    app.get('/getProducts', function(request, response) {
        products.getProducts(request, response);
    });

    app.post('/addProduct', function(request, response) {
        products.addProduct(request, response);
    });

    app.get('/getOrders', function(request, response) {
        orders.getOrders(request, response);
    });

    app.post('/addOrder', function(request, response) {
        orders.addOrder(request, response);
    })
}
