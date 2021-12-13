import { dadosFamiliares, PrismaClient } from "@prisma/client";
import { Response, Request } from "express";

const prisma = new PrismaClient();
export const FamilyData = {
  create: async (req: Request, res: Response) => {
    const familyData = req.body as dadosFamiliares;
    const familyDataCreated = await prisma.dadosFamiliares.create({
      data: familyData,
    });

    return res.json(familyDataCreated);
  },
  find: async (req: Request, res: Response) => {
    const idParticipant = req.params;
    const familyData = await prisma.dadosFamiliares.findFirst({
      where: {
        idParticipante: Number(idParticipant),
      },
    });
    if (familyData) {
      return res.json(familyData);
    }
    return res.json({ message: "Nenhum dado familiar foi encontrado." });
  },
  update: async (req: Request, res: Response) => {
    const familyData = req.body as dadosFamiliares;
    await prisma.dadosFamiliares.update({
      where: {
        id: familyData.id,
      },
      data: familyData,
    });

    return res.status(204);
  },
  delete: async (req: Request, res: Response) => {
    const id = req.params;
    await prisma.dadosFamiliares.delete({
      where: {
        id: Number(id),
      },
    });

    return res.status(204);
  },
};
