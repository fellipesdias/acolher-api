import { endereco } from "@prisma/client";
import { Response, Request } from "express";
import { prismaClient as prisma } from "../../server";

export const Address = {
  create: async (req: Request, res: Response) => {
    const data = req.body as endereco;
    if (!data.idParticipante) {
      return res.status(400);
    }
    const addressCreated = await prisma.endereco.create({
      data,
    });
    return res.json(addressCreated);
  },
  find: async (req: Request, res: Response) => {
    const { idParticipant } = req.params;
    const addresses = await prisma.endereco.findMany({
      where: {
        idParticipante: Number(idParticipant),
      },
    });
    if (addresses) {
      return res.json(addresses);
    }
    return res.json({ message: "Nenhum endereço foi encontrado." });
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
