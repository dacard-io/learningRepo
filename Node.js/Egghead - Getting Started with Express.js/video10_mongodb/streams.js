// This is the stream file

var fs = require('fs');

var inputFile = './users.json';
var outputFile = './out.json';

var readable = fs.createReadStream(inputFile);
var writable = fs.createWriteStream(outputFile);

// Tie the streams together using the pipe method
readable.pipe(writable); // Take data from readable, and pipe it to writable

/* So I get it, but whats the point? Well in your helpers file did you notice in the getUser
   function that when the JSON data is parsed your running a fs.readFileSync command? Well
   although its fine, the fs.readFileSync function is a blocking operation. The word sync
   means that its a synchronous call, so its blocking. So nothing else can happen while that
   read operation is happening. This will be a huuuuge problem for apps that have many users.

	So lets remove that blocking function */