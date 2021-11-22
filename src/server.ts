import express from "express";
import bodyParser from "body-parser";
import PersonalData from "./models/partner/personalData";
let arr: Array<Partial<PersonalData>> = [
  { id: 1, fullName: "silas" },
  { id: 2, fullName: "felipe" },
  { id: 3, fullName: "juliana" },
  { id: 4, fullName: "maria" },
  { id: 5, fullName: "marcelinha" },
];

const server = express();
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

server.get("/", (req, res) => {
  res.send("The root app is ok");
});

server.get("/partner", (req, res) => {
  res.json(arr);
});

server.get("/partner/:id", (req, res) => {
  const { id } = req.params;

  return res.json(arr.find((partner) => partner.id === Number(id)));
});

server.post("/partner", (req, res) => {
  const id = new Date().getTime();
  const body = req.body as Partial<PersonalData>;
  const newPartner: Partial<PersonalData> = { ...body, id };
  return res.status(201).json(newPartner);
});

server.put("/partner", (req, res) => {
  return res.json({ ...req.body });
});

server.delete("/partner/:id", (req, res) => {
  if (arr.find((partner) => partner.id === Number(req.params.id))) {
    return res.status(202).send();
  } else {
    return res.status(204).send();
  }
});

export default server;
