import { PrismaClient } from '@prisma/client';
const bcrypt = require('bcrypt');
const prisma = new PrismaClient();
export default async function handle(req, res) {
  try {
    // check if there is at least one user in the database with the given email
    const existing = await prisma.user.findMany({
        where: {
            email: req.body.email
        }
    })

    if (existing.length > 0) {
      res.status(400).json({ error: 'Uporabnik že obstaja' });
      return;
    }

    if (
      !req.body.email ||
      !req.body.password ||
      !req.body.passwordConfirm ||
      !req.body.name ||
      !req.body.lastName ||
      !req.body.phone
    ) {
      res.status(400).json({ error: 'Vnesite vse podatke' });
      return;
    }

    if (req.body.password !== req.body.passwordConfirm) {
      res.status(400).json({ error: 'Gesli se ne ujemata' });
      return;
    }

    if (req.body.password.length < 6) {
      res
        .status(400)
        .json({ error: 'Geslo mora biti dolgo vsaj 6 znakov' });
      return;
    }

    if (req.body.phone.length < 9) {
      res.status(400).json({
        error: 'Telefonska številka mora biti dolga vsaj 9 znakov'
      });
      return;
    }

    if (req.body.name.length < 2) {
      res
        .status(400)
        .json({ error: 'Ime mora biti dolgo vsaj 2 znaka' });
      return;
    }

    if (req.body.lastName.length < 2) {
      res
        .status(400)
        .json({ error: 'Priimek mora biti dolg vsaj 2 znaka' });
      return;
    }

    if (!req.body.email.includes('@')) {
      res
        .status(400)
        .json({ error: 'Vnesite veljaven email naslov' });
      return;
    }

    if (!req.body.email.includes('.')) {
      res
        .status(400)
        .json({ error: 'Vnesite veljaven email naslov' });
      return;
    }

    if (req.body.email.includes(' ')) {
      res
        .status(400)
        .json({ error: 'Vnesite veljaven email naslov' });
      return;
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(
      req.body.password,
      salt
    );

    const user = await prisma.user.create({
      data: {
        email: req.body.email,
        passwordHash: hashedPassword,
        name: req.body.name,
        lastName: req.body.lastName,
        phoneNumber: req.body.phone
      }
    });

    // create default DateTime variable for open and close
    const open = '08:00';
    const close = '21:00';

    const restaurant = await prisma.restaurant.create({
      data: {
        name: 'Moja restavracija',
        address: 'Moj naslov',
        userId: user.id,
        mondayOpen: open,
        mondayClose: close,
        tuesdayOpen: open,
        tuesdayClose: close,
        wednesdayOpen: open,
        wednesdayClose: close,
        thursdayOpen: open,
        thursdayClose: close,
        fridayOpen: open,
        fridayClose: close,
        saturdayOpen: open,
        saturdayClose: close,
        sundayOpen: open,
        sundayClose: close
      }
    });
    return res.status(200).json(user);
  } catch (e) {
    console.log(e);
    return res
      .status(500)
      .json({ error: e.message || 'Napaka pri registraciji' });
  }
}
