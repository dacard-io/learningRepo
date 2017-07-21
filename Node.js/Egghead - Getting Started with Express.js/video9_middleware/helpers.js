// Require dependencies
var fs = require('fs');
var path = require('path');
var _ = require('lodash');

// Helper functions
function getUserFilePath(username) {
	return path.join(__dirname, 'users', username) + '.json';
}
function getUser(username) {
	var user = JSON.parse(fs.readFileSync(getUserFilePath(username), {encoding: 'utf8'}));
	user.name.full = _.startCase(user.name.first + ' ' + user.name.last);
	_.keys(user.location).forEach(function(key) {
		user.location[key] = _.startCase(user.location[key]);
	});
	return user;
}
function saveUser (username, data) {
  var fp = getUserFilePath(username)
  fs.unlinkSync(fp) // delete the file
  fs.writeFileSync(fp, JSON.stringify(data, null, 2), {encoding: 'utf8'})
}
function verifyUser(request, response, next) {
	var fp = getUserFilePath(request.params.username);

	// Check if it exists
	fs.exists(fp, function (yes) {
		if (yes) {
			next();
		} else {
			//next('route'); 
			/* What next route does, is that if the file doesn't exist, move on to the next route handler
			   and perform the other route. In this case, the /:username route is going to be called, if
			   the json file for the user is not found, use next(route) to skip that route function and go
			   to the next one, which will output a 404 error! But lets redirect instead */
			response.redirect('/error/' + request.params.username);
		}
	});

}

// Export functions to be used in other files
exports.getUser = getUser;
exports.getUserFilePath = getUserFilePath;
exports.saveUser = saveUser;
exports.verifyUser = verifyUser;