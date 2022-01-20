import { participantes } from "@prisma/client";
import { Request, Response } from "express";
import { prismaClient as prisma } from "../../server";

export const Participants = {
  create: async (req: Request, res: Response) => {
    const participant = req.body as participantes;
    if (participant.nomeCompleto) {
      const createdParticipant = await prisma.participantes.create({
        data: participant,
      });
      return res.json(createdParticipant).status(201);
    }
    return res.status(400);
  },
  findAll: async (req: Request, res: Response) => {
    const participantList = await prisma.participantes.findMany();
    return res.status(200).json(participantList);
  },
  find: async (req: Request, res: Response) => {
    const { id } = req.params;
    const participant = await prisma.participantes.findUnique({
      where: {
        id: Number(id),
      },
    });
    if (participant) {
      return res.json(participant);
    }
    return res.status(404).json({ mensagem: "Participante não encontrado" });
  },
  update: async (req: Request, res: Response) => {
    const participantUpdated = req.body as participantes;

    const participant = await prisma.participantes.update({
      where: {
        id: Number(participantUpdated.id),
      },
      data: {
        ...participantUpdated,
        dtNascimento: null,
      },
    });
    if (participant) {
      return res.json(participant);
    }
    return res.status(404).json({ message: "participante não encontrado" });
  },
  delete: async (req: Request, res: Response) => {
    const { id } = req.params;
    const response = await prisma.participantes.delete({
      where: {
        id: Number(id),
      },
    });
    if (response) {
      return res.status(204);
    }
    return res.json({ message: "Não foi possível deletar este participante" });
  },
};
