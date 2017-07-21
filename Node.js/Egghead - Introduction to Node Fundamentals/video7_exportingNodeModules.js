/* These are video tutorials for Node by Egghead, so I'll try to write any notes in here */

/* This video will cover exporting Node.js modules */

var circle = require(./video6_moduleCircle.js);

// We can use a module.exports to do the same thing
// The file will go in here, don't need to make another file
var PI = Math.PI;
module.exports = function(r) {
	return {
		area: function() {
			return PI * r * r;
		},
		circumference: function() {
			return 2 * PI * r;
		} // Notice we are returning a json object
}
// So now we can create objects now
var myCircle = circle(4);
myCircle.area(); // Should return the area of myCircle
myCircle.circumference(); // Should return the circumference of myCircle

/* So in conclusion, use exports.function_name to export regular functions
   and module.exports to return Javascript objects */

