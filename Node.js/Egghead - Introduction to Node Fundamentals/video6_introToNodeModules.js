/* These are video tutorials for Node by Egghead, so I'll try to write any notes in here */

/* This video will cover Node.js modules and how to use them */

// So I created a video6_moduleCircle.js module file, so lets load it up and use it
var circle = require('./video6_moduleCircle.js'); // ./ will look in the current working directory
cirlce.area(4); // Should return 50.2654......
circle.circumference(4); // Should return 25.1327....

// This is if you used npm install colors to install the colors depencency
var colors = require("colors");
console.log('All the colors of the rainbow'.rainbow); // Should output a message with a bunch of colors

var http = require("http"); // Will load the Node HTTP file server

var circle = require('./video6_moduleCircle'); // Even with .js ommited, it will still correctly load the module