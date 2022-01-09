import { endereco, PrismaClient } from "@prisma/client";
import { Response, Request } from "express";
import { prismaClient as prisma } from "../../server";

export const Address = {
  create: async (req: Request, res: Response) => {
    const address = req.body as endereco;
    console.log(address)
    const addressCreated = await prisma.endereco.create({
      data: address,
    });

    return res.json(addressCreated);
  },
  find: async (req: Request, res: Response) => {
    const id = req.params;
    const address = await prisma.endereco.findMany({
      where: {
       idParticipante:Number(id)
      },
    });
    if (address) {
      return res.json(address);
    }
    return res.json({ message: "Nenhum dado familiar foi encontrado." });
  },
  update: async (req: Request, res: Response) => {
    const address = req.body as endereco;
    await prisma.endereco.update({
      where: {
        id: address.id,
      },
      data: address,
    });

    return res.status(204);
  },
  delete: async (req: Request, res: Response) => {
    const id = req.params;
    await prisma.endereco.delete({
      where: {
        id: Number(id),
      },
    });

    return res.status(204);
  },
};
