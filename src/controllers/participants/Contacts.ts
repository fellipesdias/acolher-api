import { contatos } from "@prisma/client";
import { Request, Response } from "express";
import { prismaClient as prisma } from "../../server";
export const Contacts = {
  create: async (req: Request, res: Response) => {
    const contact = req.body as contatos[];
    const newContacts = await prisma.contatos.createMany({
      data: contact,
      skipDuplicates: true,
    });

    return res.status(201).json(newContacts);
  },
  find: async (req: Request, res: Response) => {
    const { participantId } = req.params;

    const contactList = await prisma.contatos.findMany({
      where: {
        idParticipante: Number(participantId),
      },
    });
    return res.json(contactList);
  },
  update: async (req: Request, res: Response) => {
    const contact = req.body as contatos;
    const contactUpdated = prisma.contatos.update({
      where: {
        id: contact.id,
      },
      data: {
        Celular: contact.Celular,
        Email: contact.Email,
        TelefoneFixo: contact.TelefoneFixo,
      },
    });

    return res.json(contactUpdated);
  },

  delete: async (req: Request, res: Response) => {
    const { id } = req.params;
    await prisma.contatos.delete({
      where: {
        id: Number(id),
      },
    });
    return res.status(204);
  },
};
