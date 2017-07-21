/* These are video tutorials for Node by Egghead, so I'll try to write any notes in here */

/* This video will cover using the Node.js event emitters */

var sayHello = function() { console.log('Hello to you!'); }
var sayGoodbye = function() { console.log('Goodbye then!'); }
var EventEmitter = require('events').EventEmitter; // Require events package for creating event emitters

emitter = new EventEmitter(); // Create a new event emitter called emitter

// Now create listeners for emitter, 1st argument is the event, and the second argument is the function callback
emitter.on('hello', sayHello);
emitter.on('goodbye', sayGoodbye);

// Now emit an event to fire the respective listener
emitter.emit('hello'); // Should output "Hello to you!"

// All events declared are stored in the global.emitter._events object in case your wondering

// You can remove event listeners at well.
emitter.removeListener('hello', sayHello); // This should remove the event listener for the "hello" event, and the sayHello() callback
// You can remove all event listeners for a certain event as well
emitter.removeAllListeners('hello');

emitter.emit('hello') // Should return -> false, because it now no longer exists

/* Node.js outputs a warning when there are more than 10 listeners in an event, outputing "Warning, more than 10 listeners. Possible memory leak"
	If you check the listeners and everything is valid for your program to operate, then you can overide this by using the
	setMaxListeners() method */
emitter.setMaxListeners(20);
emitter.setMaxListeners(0); // 0 means to set to an unlimited number of listeners.