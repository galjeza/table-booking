import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();


export default async function handler(req, res) {
        const restaurant = await prisma.restaurant.update({
            where: {
                id: parseInt(req.body.id)
            },
            data: {
                name: req.body.name,
                address: req.body.address,
                mondayClose: req.body.mondayClose,
                mondayOpen: req.body.mondayOpen,
                tuesdayClose: req.body.tuesdayClose,
                tuesdayOpen: req.body.tuesdayOpen,
                wednesdayClose: req.body.wednesdayClose,
                wednesdayOpen: req.body.wednesdayOpen,
                thursdayClose: req.body.thursdayClose,
                thursdayOpen: req.body.thursdayOpen,
                fridayClose: req.body.fridayClose,
                fridayOpen: req.body.fridayOpen,
                saturdayClose: req.body.saturdayClose,
                saturdayOpen: req.body.saturdayOpen,
                sundayClose: req.body.sundayClose,
                sundayOpen: req.body.sundayOpen,
            }
        })
        res.json(restaurant)
}
