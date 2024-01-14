const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hi from backend, kya ye chalega!");
});

app.listen(port, () => {
  console.log("Server running at http://127.0.0.1:" + port + "/");
});
