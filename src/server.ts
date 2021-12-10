import express from "express";
import bodyParser from "body-parser";
import { AuthController } from "./controllers/AuthController";

const server = express();
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

server.get("/", (req, res) => {
  res.send("The root app is ok");
});

server.post("/login", async (req, res) => {
  const userData = await AuthController.login(req, res);
  return userData.send();
});

server.post("/signup", async (req, res) => {
  const newUser = await AuthController.signup(req, res);
  return newUser.send();
});

export default server;
