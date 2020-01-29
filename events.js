// no path because it is a core module that comes with node js 
const events = require("events");

const emitter = new events.EventEmitter();


emitter.on("customEvent", (message,user)=> {
	console.log(`${user}: ${message}`);
});
emitter.emit("customEvent", "helloWorld", "computer");
emitter.emit("customEvent", "That's pretty cool huh", "Smarter Child");