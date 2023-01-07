import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();


export default async function handler(req, res) {
    // get all reservations for the restaurant
    const tables = await prisma.table.findMany({
        where: {
            restaurantId: parseInt(req.body.restaurantId)
        }
    })

    for (const table of tables) {
        if (table.capacity >= parseInt(req.body.partySize)) {
            let isAvailable = true;
            // get all reservations for the table
            const reservations = await prisma.reservation.findMany({
                where: {
                    tableId: table.id
                }
            })
            for (const reservation of reservations) {
                if (reservation.date === req.body.date) {
                    if ((req.body.startTime >= reservation.startTime && req.body.startTime < reservation.endTime) || (req.body.endTime > reservation.startTime && req.body.endTime <= reservation.endTime)) {
                        isAvailable = false;
                    }

                }


            }


            if (isAvailable) {
                const reservation = await prisma.reservation.create({
                    data: {
                        date: req.body.date,
                        startTime: req.body.startTime,
                        endTime: req.body.endTime,
                        partySize: parseInt(req.body.partySize),
                        tableId: table.id,
                        customer : req.body.customer
                    }
                })
                res.json(reservation)
                return;
            }
        }
    }

    res.json({error: "No tables available"})

}