import { dadosEscolares } from "@prisma/client";
import { Request, Response } from "express";
import { prismaClient as prisma } from "../../server";

export const SchoolData = {
  create: async (req: Request, res: Response) => {
    const schoolData = req.body as dadosEscolares;
    if (schoolData.idParticipante) {
      const createdSchoolData: dadosEscolares =
        await prisma.dadosEscolares.create({
          data: schoolData,
        });
      return res.json(createdSchoolData);
    }
    return res.status(400);
  },
  find: async (req: Request, res: Response) => {
    const { idParticipant } = req.params;
    const schoolData = await prisma.dadosEscolares.findFirst({
      where: {
        idParticipante: Number(idParticipant),
      },
    });
    if (schoolData) {
      return res.json(schoolData);
    }
    return res.status(404).json({
      message: "Não foram encontrados dados escolares para esse participante",
    });
  },
  update: async (req: Request, res: Response) => {
    const schoolData = req.body as dadosEscolares;
    await prisma.dadosEscolares.update({
      where: {
        id: schoolData.id,
      },
      data: schoolData,
    });

    return res.status(204);
  },
  delete: async (req: Request, res: Response) => {
    const { id } = req.params;
    await prisma.dadosEscolares.delete({
      where: { id: Number(id) },
    });
    return res.status(204);
  },
};
