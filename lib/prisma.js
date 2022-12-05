import { PrismaClient } from '@prisma/client'
let prisma = global.prisma || new PrismaClient(
    {
        datasources: {
            db: {
                url: process.env.DATABASE_URL,
            }
        }
    }
);
if (process.env.NODE_ENV === "development") global.prisma = prisma;
export default prisma