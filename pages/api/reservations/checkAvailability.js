import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  // get all reservations for the restaurant
  const tables = await prisma.table.findMany({
    where: {
      restaurantId: parseInt(req.body.restaurantId)
    }
  });

  tables.sort((a, b) => a.capacity - b.capacity);

  for (const table of tables) {
    if (table.capacity >= parseInt(req.body.partySize)) {
      let isAvailable = true;
      // get all reservations for the table
      const reservations = await prisma.reservation.findMany({
        where: {
          tableId: table.id
        }
      });
      for (const reservation of reservations) {
        if (reservation.date === req.body.date) {
          if (
            (req.body.startTime >= reservation.startTime &&
              req.body.startTime < reservation.endTime) ||
            (req.body.endTime > reservation.startTime &&
              req.body.endTime <= reservation.endTime)
          ) {
            isAvailable = false;
          }
        }
      }

      if (isAvailable) {
        res.json({ available: true, ...req.body });
        return;
      }
    }
  }

  res.json({ available: false });
}
