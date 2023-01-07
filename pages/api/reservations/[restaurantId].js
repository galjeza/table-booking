import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function handler(req, res) {
   // get reservations by restaurant id
    const reservations = await prisma.reservation.findMany({
        where: {
            table: {
                restaurantId: parseInt(req.query.id)
            }
        }
    }
    )
    res.json(reservations)
}