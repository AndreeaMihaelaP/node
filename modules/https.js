const internals = require("./internals");

function makeRequest(url, data) {
  internals.request.send(url, data);
  return internals.response.read(data);
}

makeRequest("google.com", "data something");
