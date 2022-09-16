const axios = require("axios");

axios
  .get("https://wwwwww.google.com")
  .then((response) => {
    console.log("response", response);
  })
  .catch((error) => {
    console.log("error", error);
  })
  .then(() => {
    console.log("All done!");
  });
