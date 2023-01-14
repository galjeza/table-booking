import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function handler(req, res) {
  // get reservations by restaurant id
  const reservations = await prisma.reservation.findMany({
    where: {
      table: {
        restaurantId: parseInt(req.query.restaurantId)
      }
    }
  });

  for (const reservation of reservations) {
    const table = await prisma.table.findUnique({
      where: {
        id: reservation.tableId
      }
    });
    reservation.table = table;
  }

  res.json(reservations);
}
