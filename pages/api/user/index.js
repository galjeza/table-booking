import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async (req, res) => {
  const data = req.body;
  try {
    // find user by email
    const user = await prisma.user.findUnique({
      where: {
        Email: data.email
      }
    });
    res.status(200).json(user);
  } catch (err) {
    console.log(err);
    res.status(403).json({ err: 'Error occured.' });
  }
};
