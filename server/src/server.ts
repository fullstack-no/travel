import http from "node:http";
import { default as app } from "./app";

import mongoose from "mongoose";

const mongoURL = "mongodb://root:123@127.0.0.1";

mongoose.connect(mongoURL, { dbName: "travel" }).then(() => {
  console.log("Connected to mongo!");
});

const server = http.createServer(app);

server.listen(5000, () => {
  console.log("server is running on port 5000...");
});
