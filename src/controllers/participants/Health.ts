import { saude, PrismaClient } from "@prisma/client";
import { Response, Request } from "express";

const prisma = new PrismaClient();
export const Health = {
  create: async (req: Request, res: Response) => {
    const health = req.body as saude;
    const healthCreated = await prisma.saude.create({
      data: health,
    });

    return res.json(healthCreated);
  },
  find: async (req: Request, res: Response) => {
    const id = req.params;
    const health = await prisma.saude.findFirst({
      where: {
        idParticipante: Number(id),
      },
    });
    if (health) {
      return res.json(health);
    }
    return res.json({ message: "Nenhum dado de saúde foi encontrado." });
  },
  update: async (req: Request, res: Response) => {
    const health = req.body as saude;
    await prisma.saude.update({
      where: {
        id: health.id,
      },
      data: health,
    });

    return res.status(204);
  },
  delete: async (req: Request, res: Response) => {
    const id = req.params;
    await prisma.saude.delete({
      where: {
        id: Number(id),
      },
    });

    return res.status(204);
  },
};
