//Dashboard
app.controller('DashboardController', function($scope, StoreFactory, $routeParams, $location) {
    $scope.products = [];
    $scope.orders = [];
    $scope.customers = [];

    function setProducts(data) {
        $scope.products = data;
    }
    function setOrders(data) {
        $scope.orders = data;
    }
    function setCustomers(data) {
        $scope.customers = data;
    }

    //init products[]
    StoreFactory.getProducts(setProducts);
    //init orders[]
    StoreFactory.getOrders(setOrders);
    //init customers[]
    StoreFactory.getCustomers(setCustomers);

});


//Products
app.controller('ProductController', function($scope, StoreFactory, $routeParams, $location) {
    $scope.products = [];
    $scope.newProduct = {};

    function setProducts(data) {
        $scope.products = data;
    }
    //init products[]
    StoreFactory.getProducts(setProducts);

    $scope.addProduct = function() {
        StoreFactory.addProduct($scope.newProduct, setProducts);
        $scope.newProduct = {};
    }
});


//Orders
app.controller('OrderController', function($scope, StoreFactory, $routeParams, $location) {
    $scope.customers = [];
    $scope.products = [];
    $scope.orders = [];
    $scope.newOrder = {};

    function setOrders(data) {
        $scope.orders = data;
    }
    function setCustomers(data) {
        $scope.customers = data;
    }
    function setProducts(data) {
        $scope.products = data;
    }

    //get orders from factory
    StoreFactory.getOrders(setOrders);
    //get customers from factory
    StoreFactory.getCustomers(setCustomers);
    //get products from factory
    StoreFactory.getProducts(setProducts);

    //when order is submitted
    $scope.addOrder = function(){
        StoreFactory.addOrder($scope.newOrder, setOrders);
    }
});


//Customers
app.controller('CustomerController', function($scope, StoreFactory, $routeParams, $location) {
    $scope.customers = [];
    $scope.newCustomer = "";

    function setCustomers(data, errMsg) {
        if (errMsg === undefined) {
            $scope.customers = data;
        } else {
            //print err msg
        }
    }
    //initialize controller data
    StoreFactory.getCustomers(setCustomers);

    $scope.addCustomer = function() {
        StoreFactory.addCustomer($scope.newCustomer, setCustomers);
        $scope.newCustomer = "";
    }

    $scope.removeCustomer = function(id) {
        StoreFactory.removeCustomer(id);
    }
});
