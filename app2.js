// Importing events
const EventEmitter = require('events');

// Initializing event emitter 
var eventEmitter = new EventEmitter();

var fun1 = (msg) => {
	console.log("Message from fun1: " + msg);
};

var fun2 = (msg) => {
	console.log("Message from fun2: " + msg);
};

// Registering 
eventEmitter.on('myEvent', fun1);
eventEmitter.on('myEvent', fun1);
eventEmitter.on('myEvent', fun2);

// Removing listener fun1 that was
// registered 
eventEmitter.removeListener('myEvent', fun1);

// Trigger myEvent
eventEmitter.emit('myEvent', "Event occurred");

// Removing all the listeners to myEvent
eventEmitter.removeAllListeners('myEvent');

// Trigger myEvent
eventEmitter.emit('myEvent', "Event occurred");


