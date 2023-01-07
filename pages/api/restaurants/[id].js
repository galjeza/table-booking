import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function handler(req, res) {
    const restaurant = await prisma.restaurant.findUnique({
        where: {
            id: parseInt(req.query.id)
        }
    })
    res.json(restaurant)
}