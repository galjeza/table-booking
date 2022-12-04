import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async (req, res) => {
  const data = req.body;
  try {
    const result = await prisma.user.findMany();
    res.status(200).json(result);
  } catch (error) {

    res.status(403).json({ error: error.message });
  }
};
