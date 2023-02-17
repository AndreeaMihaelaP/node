const http = require("http");

const app = require("./app");
const mongoose = require("mongoose");
const { loadPlanetsData, planets } = require("./models/planets.model");

const server = http.createServer(app);

mongoose.connection.once("open", () => {
  console.log("MongoDB connection ready!");
});

mongoose.connection.on("error", (err) => {
  console.error(err);
});

const PORT = process.env.PORT || 8000;
const MONGO_URL =
  "mongodb+srv://nasa-api:vQWIBAtykxDLZvYA@nasacluster.jmcmqn5.mongodb.net/nasa?retryWrites=true&w=majority";

async function startServer() {
  mongoose.connect(MONGO_URL);
  await loadPlanetsData();

  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
  });
}

startServer();
