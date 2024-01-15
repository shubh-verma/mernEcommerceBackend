const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const port = process.env.PORT || 3000;

app.get("/getData", (req, res) => {
  res.send("Hi from backend, kya ye chalega! yes chal gaya");
});

app.listen(port, () => {
  console.log("Server running at http://127.0.0.1:" + port + "/");
});
