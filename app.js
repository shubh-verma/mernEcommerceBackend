import express from "express";
import cors from "cors";

const port = process.env.PORT || 3000;

const app = express();
app.use(cors());

app.get("/getData", (req, res) => {
  res.send("Hello from backend!");
});

// Listen on port 3000, IP defaults to 127.0.0.1
app.listen(port, () => {
  console.log("Server running at http://127.0.0.1:" + port + "/");
});

// Put a friendly message on the terminal

//   http = require("http"),
//   fs = require("fs"),
//   html = fs.readFileSync("index.html");

// const log = function (entry) {
//   fs.appendFileSync(
//     "/tmp/sample-app.log",
//     new Date().toISOString() + " - " + entry + "\n"
//   );
// };

// const server = http.createServer(function (req, res) {
//   if (req.method === "POST") {
//     let body = "";

//     req.on("data", function (chunk) {
//       body += chunk;
//     });

//     req.on("end", function () {
//       if (req.url === "/") {
//         log("Received message: " + body);
//       } else if ((req.url = "/scheduled")) {
//         log(
//           "Received task " +
//             req.headers["x-aws-sqsd-taskname"] +
//             " scheduled at " +
//             req.headers["x-aws-sqsd-scheduled-at"]
//         );
//       }

//       res.writeHead(200, "OK", { "Content-Type": "text/plain" });
//       res.end();
//     });
//   } else {
//     res.writeHead(200);
//     res.write(html);
//     res.end();
//   }
// });
