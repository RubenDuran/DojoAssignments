var Customers = require('./../controllers/customers.js');
var Products = require('./../controllers/products.js');
var Orders = require('./../controllers/orders.js');
var path = require('path');

module.exports = function(app){

	app.get('/dashboard', function(req,res, next){
		res.sendFile(path.resolve('./mini-store/dist/index.html'));
	})
	app.get('/api/customers', Customers.getCustomers);
	app.post('/api/customers', Customers.create);
    app.post('/api/customers/:id', Customers.delete);


	app.get('/api/products', Products.getProducts);
	app.post('/api/products', Products.create);

    app.get('/api/orders', Orders.getOrders);
	app.post('/api/orders', Orders.create);


}
