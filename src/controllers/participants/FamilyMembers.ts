import { familiares } from "@prisma/client";
import { Response, Request } from "express";
import { prismaClient as prisma } from "../../server";

export const FamilyMembers = {
  create: async (req: Request, res: Response) => {
    const familyMembers = req.body as familiares;
    const familyMembersCreated = await prisma.familiares.create({
      data: familyMembers,
    });

    return res.json(familyMembersCreated);
  },
  findAll: async (req: Request, res: Response) => {
    const id = req.params;
    const familyMembers = await prisma.familiares.findMany({
      where: {
        idParticipante: Number(id),
      },
    });
    if (familyMembers) {
      return res.json(familyMembers);
    }
    return res.json({ message: "Nenhum familiar foi encontrado." });
  },
  update: async (req: Request, res: Response) => {
    const familyMembers = req.body as familiares;
    await prisma.familiares.update({
      where: {
        id: familyMembers.id,
      },
      data: familyMembers,
    });

    return res.status(204);
  },
  delete: async (req: Request, res: Response) => {
    const id = req.params;
    await prisma.familiares.delete({
      where: {
        id: Number(id),
      },
    });

    return res.status(204);
  },
};
