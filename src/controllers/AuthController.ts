import { Request, Response } from "express";
import { prismaClient as prisma } from "../server";

export const AuthController = {
  login: async (req: Request, res: Response) => {
    const { usuario, senha } = req.body;
    if (usuario && senha) {
      const user = await prisma.usuarios.findFirst({
        where: {
          usuario,
          senha,
        },
      });
      prisma.$disconnect();

      if (user) {
        return res.json(user);
      } else {
        return res.status(401).json({ mensagem: "credenciais inválidas." });
      }
    }
    return res.status(400).json();
  },

  signup: async (req: Request, res: Response) => {
    const { usuario, senha } = req.body;
    const user = await prisma.usuarios.findFirst({
      where: {
        usuario,
      },
    });

    if (!user) {
      const newUser = await prisma.usuarios.create({
        data: {
          usuario,
          senha,
        },
      });

      prisma.$disconnect();
      return res.json(newUser);
    }

    prisma.$disconnect();
    return res.json({
      mensagem: "Já existe um usuário cadastrado com esse username",
    });
  },
};
