import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import { AuthController } from "./controllers/AuthController";
import { Participants } from "./controllers/participants/Participants";
import { Address } from "./controllers/participants/Address";
import { Contacts } from "./controllers/participants/Contacts";
import { FamilyData } from "./controllers/participants/FamilyData";
import { FamilyMembers } from "./controllers/participants/FamilyMembers";
import { Health } from "./controllers/participants/Health";
import { SchoolData } from "./controllers/participants/SchoolData";
import { PrismaClient } from "@prisma/client";
import cors from "cors";

const server = express();

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(express.json());
server.use(cors());

server.get("/", (req, res) => {
  res.send("The server is up");
});

server.post("/login", (req: Request, res: Response) => {
  return AuthController.login(req, res).then((response) => response.send());
});

server.post("/signup", (req: Request, res: Response) => {
  console.log('ALGUMA COISA' || req.body)  
   return AuthController.signup(req, res).then((response) => response.send());
});

/**partner crud */
server.post("/participant", async (req, res) => {
  const response = await Participants.create(req, res);
  return response.send();
});

server.get("/participant", async (req, res) => {
  const response = await Participants.findAll(req, res);
  return response;
});

server.get("/participant/:id", async (req, res) => {
  const response = await Participants.find(req, res);
  return response.send();
});

server.put("/participant", async (req, res) => {
  const response = await Participants.update(req, res);
  return response.send();
});

server.delete("/participant/:id", async (req, res) => {
  const response = await Participants.delete(req, res);
  return response.send();
});

/** crud contatos */
server.get("/contact/:participantId", async (req, res) => {
  const response = await Contacts.find(req, res);
  return response.send();
});

server.post("/contact", async (req, res) => {
  const response = await Contacts.create(req, res);
  return response.send();
});

server.put("/contact", async (req, res) => {
  const response = await Contacts.update(req, res);
  return response.send();
});

server.delete("/contact/:id", async (req, res) => {
  const response = await Contacts.delete(req, res);
  return response.send();
});

/** dados familiares */

server.post("/familyData", async (req, res) => {
  const response = await FamilyData.create(req, res);
  return response.send();
});

server.put("/familyData", async (req, res) => {
  const response = await FamilyData.update(req, res);
  return response.send();
});

server.get("/familyData/:idParticipant", async (req, res) => {
  const response = await FamilyData.find(req, res);
  return response.send();
});

server.delete("/familyData/:id", async (req, res) => {
  const response = await FamilyData.delete(req, res);
  return response.send();
});

/** membros da familia */

server.post("/familyMembers", async (req, res) => {
  const response = await FamilyMembers.create(req, res);
  return response.send();
});

server.put("/familyMembers", async (req, res) => {
  const response = await FamilyMembers.update(req, res);
  return response.send();
});

server.get("/familyMembers/:idParticipant", async (req, res) => {
  const response = await FamilyMembers.findAll(req, res);
  return response.send();
});

server.delete("/familyMembers/:id", async (req, res) => {
  const response = await FamilyMembers.delete(req, res);
  return response.send();
});

/** saúde */

server.post("/health", async (req, res) => {
  const response = await Health.create(req, res);
  return response.send();
});

server.put("/health", async (req, res) => {
  const response = await Health.update(req, res);
  return response.send();
});

server.get("/health/:idParticipant", async (req, res) => {
  const response = await Health.find(req, res);
  return response.send();
});

server.delete("/health/:id", async (req, res) => {
  const response = await Health.delete(req, res);
  return response.send();
});

/** dados escolares */

server.post("/schoolData", async (req, res) => {
  const response = await SchoolData.create(req, res);
  return response.send();
});

server.put("/schoolData", async (req, res) => {
  const response = await SchoolData.update(req, res);
  return response.send();
});

server.get("/schoolData/:idParticipant", async (req, res) => {
  const response = await SchoolData.find(req, res);
  return response.send();
});

server.delete("/schoolData/:id", async (req, res) => {
  const response = await SchoolData.delete(req, res);
  return response.send();
});

/** Endereço **/
server.post("/address", async (req, res) => {
  console.log(req)
  const response = await Address.create(req, res);
  return response.send();
});

server.put("/address", async (req, res) => {
  const response = await Address.update(req, res);
  return response.send();
});

server.get("/address/:idParticipant", async (req, res) => {
  const response = await Address.find(req, res);
  return response.send();
});

server.delete("/address/:id", async (req, res) => {
  const response = await Address.delete(req, res);
  return response.send();
});

export const prismaClient = new PrismaClient();
export default server;
