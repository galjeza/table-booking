import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
    // delete reservation by id
    const reservation = await prisma.reservation.delete({
        where: {
            id: parseInt(req.body.id)
        }
    }
    );

    res.json(reservation);
}
