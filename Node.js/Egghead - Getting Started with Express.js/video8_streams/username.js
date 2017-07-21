// This is the file that contains username router functions

// Require dependencies
var express = require('express');
var fs = require('fs');
var helpers = require('./helpers'); // Require helpers!

/*
var router = express.Router(); // Create an instance of a router for username use only
*/
/* Okay this part is odd, but declaring a router by itself will create a path.join error. To eleviate
   this, you have to pass in an options object with mergeParams to true */
var router = express.Router({
	mergeParams: true
});

router.all('/', function (request, response, next) {
	console.log(request.method, 'for', request.params.username);
	next();
})
router.get('/', helpers.verifyUser, function(request, response) {
	var username = request.params.username; // req.params.username will pull the routed username and store it
	var user = helpers.getUser(username);
	response.render('user', {
		user: user,
		address: user.location
	}); // Send the username on the username page
})
router.put('/', function(request, response) {
	var username = request.params.username; // req.params.username will pull the routed username and store it
	var user = helpers.getUser(username);
	user.location = request.body;
	// .body is the ajax data sent from the save() function in our user.hbs template file 
	helpers.saveUser(username, user);
	response.end();
})
router.delete('/', function(request, response) {
	var fp = helpers.getUserFilePath(request.params.username);
	fs.unlinkSync(fp); // Delete the file
	res.sendStatus(200);
});
// Lets create a router to send the user to an edit page when clicked (look at the link in the users template)
router.get('/edit', function(request, response) {
	response.send('You want to edit ' + request.params.username + '?');
});

/* You probably are wondering why the paths are just a slash. The reason for this is because you are
	exporting the routers, and you define the router in the index! */
module.exports = router;
