addEventListener("message", function(event) { // Listen to message events, and pass the event through
	postMessage(event.data * event.data); // Post the message 
})