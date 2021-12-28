import { Request, Response } from "express";
import { prismaClient as prisma } from "../server";

export const AuthController = {
  login: async (req: Request, res: Response) => {
    const { username, password } = req.body;
    if (username && password) {
      const user = await prisma.usuarios.findFirst({
        where: {
          usuario: username,
          senha: password,
        },
      });
      prisma.$disconnect();

      if (user) {
        return res.json(user);
      } else {
        return res.status(401).json({ message: "credenciais inválidas." });
      }
    }
    return res.status(400).json();
  },

  signup: async (req: Request, res: Response) => {
    const { username, password } = req.body;
    const user = await prisma.usuarios.findFirst({
      where: {
        usuario: username,
      },
    });

    if (!user) {
      const newUser = await prisma.usuarios.create({
        data: {
          usuario: username,
          senha: password,
        },
      });

      prisma.$disconnect();
      return res.json(newUser);
    }

    prisma.$disconnect();
    return res.json({
      message: "Já existe um usuário cadastrado com esse username",
    });
  },
};
