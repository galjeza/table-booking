import prisma from '../../../lib/prisma';
export default async (req, res) => {
  try {
    const result = await index.user.findMany();
    res.status(200).json(result);
  } catch (error) {
    res.status(403).json({ error: error.message });
  }
};
