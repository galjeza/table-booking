import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
export default async function handle(req, res) {
  const existingUser = await prisma.user.findUnique({
    where: {
      email: req.body.email
    }
  });
  if (existingUser) {
    res.status(400).json({ error: 'Uporabnik že obstaja' });
    return;
  }

  const user = await prisma.user.create({
    data: {
      email: req.body.email,
      password: req.body.password,
      name: req.body.name,
      lastName: req.body.lastName,
      phone: req.body.phone
    }
  });
  return res.status(200).json(user);
}
