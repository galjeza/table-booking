import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
export default async function handle(req, res) {
  const existingUser = await prisma.user.findUnique({
    where: {
      email: req.body.email
    }
  });
  if (existingUser) {
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
    res.status(400).json({ error: 'Vnesite veljaven email naslov' });
    return;
  }

  if (!req.body.email.includes('.')) {
    res.status(400).json({ error: 'Vnesite veljaven email naslov' });
    return;
  }

  if (req.body.email.includes(' ')) {
    res.status(400).json({ error: 'Vnesite veljaven email naslov' });
    return;
  }
  const user = await prisma.user.create({
    data: {
      email: req.body.email,
      password: req.body.password,
      name: req.body.name,
      lastName: req.body.lastName,
      phone: req.body.phone
    }
  });
  return res.status(200).json(user);
}
