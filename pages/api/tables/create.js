import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function handler(req, res) {
  const table = await prisma.table.create({
    data: {
      number: parseInt(req.body.number),
      capacity: parseInt(req.body.capacity),
      restaurantId: parseInt(req.body.restaurantId)
    }
  });
  res.json(table);
}
