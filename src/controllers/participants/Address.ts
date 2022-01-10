import { endereco, PrismaClient } from "@prisma/client";
import { Response, Request } from "express";
import { prismaClient as prisma } from "../../server";

export const Address = {
  create: async (req: Request, res: Response) => {
    const address = req.body as endereco;
    console.log("create: ", JSON.stringify(address));
    if (!address.idParticipante) {
      return res.status(400);
    }

    const addressCreated = await prisma.endereco.create({
      data: address,
    });

    return res.json(addressCreated);
  },
  find: async (req: Request, res: Response) => {
    const { idParticipant } = req.params;
    const address = await prisma.endereco.findMany({
      where: {
        idParticipante: Number(idParticipant),
      },
    });
    if (address) {
      return res.json(address);
    }
    return res.json({ message: "Nenhum endereço foi encontrado." });
  },
  update: async (req: Request, res: Response) => {
    const address = req.body as endereco;
    console.log("update: ", JSON.stringify(address));
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
