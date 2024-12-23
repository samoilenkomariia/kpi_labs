const EventEmitter = require("events");

class MessageEmitter extends EventEmitter {
  sendMessage(message) {
    this.emit("message", message);
  }
}

const emitter = new MessageEmitter();

setInterval(() => {
  const message = { text: "some text" };
  emitter.sendMessage(message);
}, 1000);

emitter.on("message", (message) => console.log("Received:", message));
