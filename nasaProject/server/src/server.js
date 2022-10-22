const http = require("http");

const app = require("./app");
const { loadPlanetsData, planets } = require("./models/planets.model");

const server = http.createServer(app);

async function startServer() {
  await loadPlanetsData();

  const PORT = process.env.PORT || 8000;

  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
  });
}

startServer();
