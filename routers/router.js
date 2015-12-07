var controller = require('../controllers/controller');

module.exports = function(app) {

	app.get('/', function (req, res) {
		res.sendfile("./views/index.html");
	});


	app.post('/signup', controller.addUser);

	app.get('/caterers', controller.allCaterers);

	app.post('/login', controller.login);

	app.post('/makeCaterer', controller.makeCaterer);

	app.post('/getOrders', controller.getOrders);

	app.post('/editdisplay', controller.editDisplay); 

	app.post('/editdishes', controller.editDishes); 

	app.post('/editpassword', controller.editPass);

	app.post('/updateDesc', controller.editDesc);

	app.post('/updatePriceRange', controller.editPrice); 

	app.post('/updateAddr', controller.editAddr); 

	app.post('/editCus', controller.editCus); 

	app.post('/placeOrder', controller.addOrder);

	app.post('/updateOrderStatus', controller.updateOrderStatus);

	app.post('/editReviews', controller.editRev); 

	app.post('/logout', controller.logout);
/*
	app.get('/userlist', controller.allUsers);

	app.post('/editProfile', controller.editProfile);

	app.post('/updatePassword', controller.updatePassword);

	app.post('/makeAdmin', controller.makeAdmin);

	app.post('/deleteUser', controller.deleteUser);

	app.post('/removeAdmin', controller.removeAdmin);

	app.post('/tracker', controller.pageCount);

	

	app.post('/uploadPic', controller.uploadPic);
	*/
};
