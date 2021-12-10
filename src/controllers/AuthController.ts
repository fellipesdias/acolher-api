import { PrismaClient } from ".prisma/client";
import { Request, Response } from "express";

export const AuthController = {
  login: async (req: Request, res: Response) => {
    const prisma = new PrismaClient();

    const { username, password } = req.body;

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
      return res.json({ message: "credenciais inválidas." });
    }
  },

  signup: async (req: Request, res: Response) => {
    const prisma = new PrismaClient();

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
