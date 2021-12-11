import express from "express";
import bodyParser from "body-parser";
import { AuthController } from "./controllers/AuthController";
import { ParticipantsController } from "./controllers/PartcipantsController";

const server = express();
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

server.get("/", (req, res) => {
  res.send("The server is up");
});

server.post("/login", async (req, res) => {
  const response = await AuthController.login(req, res);
  return response.send();
});

server.post("/signup", async (req, res) => {
  const response = await AuthController.signup(req, res);
  return response.send();
});

/**partner crud */
server.post("/participant", async (req, res) => {
  const response = await ParticipantsController.create(req, res);
  return response.send();
});

server.get("/participant", async (req, res) => {
  const response = await ParticipantsController.findAll(req, res);
  return response.send();
});

server.get("/participant/:id", async (req, res) => {
  const response = await ParticipantsController.find(req, res);
  return response.send();
});

server.put("/participant/:id", async (req, res) => {
  const response = await ParticipantsController.update(req, res);
  return response.send();
});

server.delete("/participant/:id", async (req, res) => {
  const response = await ParticipantsController.delete(req, res);
  return response.send();
});

export default server;
