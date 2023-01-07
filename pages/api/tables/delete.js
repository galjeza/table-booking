import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function handler(req, res) {
    const table = await prisma.table.delete({
        where: {
            id: parseInt(req.body.id)
        }
    })
    res.json(table)
}