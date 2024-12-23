const EventEmitter = require("events");

class MessageEmitter extends EventEmitter {
  constructor() {
    super();
    this.messageCount = 0;
  }
  sendMessage(message) {
    this.messageCount++;
    this.emit("message", { ...message, id: this.messageCount });
  }
}

const emitter = new MessageEmitter();

const intervalId = setInterval(() => {
  const message = { text: "some text", timestamp: Date.now() };
  emitter.sendMessage(message);
}, 1000);

emitter.on("message", (message) => {
  console.log("First listener received:", message);
});

emitter.on("message", (message) => {
  console.log("Second listener received:", message);
});
