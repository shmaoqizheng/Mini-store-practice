//factory
app.factory('StoreFactory', function($http) {
    var factory = {};
    var customers = [];
    var products = [];
    var orders = [];

    //////////customer data handling//////////////////////
    //initialize customers[]
    function refreshCustomers() {
        $http.get('/getCustomers').then(function(response) {
            customers = response.data;
        });
    }

    refreshCustomers();

    factory.getCustomers = function(callback) {
        //initialize factory data
        $http.get('/getCustomers').then(function(response) {
            customers = response.data;
            callback(customers);
        });
    }

    factory.addCustomer = function(newCustomer, callback) {
        $http.post('/addCustomer', {name: newCustomer}).then(function(response) {
            if (response.data.exists == true) {
                callback(customers, "User already exists")
            } else {
                customers.push(response.data);
                console.log(customers);
                callback(customers);
            }
        });
    }

    factory.removeCustomer = function(id) {
        $http.post('/removeCustomer', {id: id}).then(function(response) {
            for (var i = 0; i < customers.length; i++) {
                if (customers[i]._id == response.data._id) {
                    customers.splice(i, 1);
                    break;
                }
            }
        });
    }

    ////////// products data handling ////////////////////////
    function refreshProducts() {
        $http.get('/getProducts').then(function(response) {
            products = response.data;
        });
    }
    refreshProducts();

    factory.getProducts = function(callback) {
        $http.get('/getProducts').then(function(response) {
            products = response.data;
            callback(products);
        });
    }

    factory.addProduct = function(product, callback) {
        $http.post('/addProduct', product).then(function(response) {
            products.push(response.data);
            callback(products);
        });
    }

    ////////// orders ///////////////////////////
    function refreshOrders() {
        $http.get('/getOrders').then(function(response) {
            orders = response.data;
        });
    }

    refreshOrders(); //initialize orders[]

    factory.getOrders = function(callback) {
        $http.get('/getOrders').then(function(response) {
            orders = response.data;
            callback(orders);
        });
    }

    factory.addOrder = function(order, callback) {
        $http.post('/addOrder', order).then(function(response) {
            orders = response.data
            callback(orders);
        });
    }

    return factory;
});
