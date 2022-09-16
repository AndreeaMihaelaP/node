const EventEmitter = require("events");

const celebrity = new EventEmitter();

// Subscribe to the celebrity for Observer 1
celebrity.on("race", (result) => {
  if (result === "win") {
    console.log("Congrats! You are the best!");
  }
});

// Subscribe to the celebrity for Observer 2
celebrity.on("race", () => {
  console.log("Bo ho");
});

celebrity.emit("race", "win");
