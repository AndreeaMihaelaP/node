const path = require("path"); // \folders\files.js

function getMessages(req, res) {
  res.sendFile(
    path.join(__dirname, "..", "public", "images", "skimountain.jpg")
  );
}

function postMessage(req, res) {
  console.log("updating messages");
}

module.exports = {
  getMessages,
  postMessage,
};
