const express = require("express");
const axios = require("axios");
require("dotenv").config();
const PORT = process.env.PORT;
const BASE_URL = process.env.BASE_URL;
const app = express();

app.get("/", (req, res) => {
  axios
    .get(`${BASE_URL}`)
    .then((result) => res.send(result.data.slice(0, 3)))
    .catch((error) => console.error(error));
});

app.listen(PORT, () => {
  console.log(`The server is running on http://localhost:${PORT}`);
});
