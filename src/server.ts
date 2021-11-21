import express from "express";

const server = express();

server.get("/", (req, res) => {
  res.send("The root app is ok");
});

export default server;
