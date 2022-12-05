import { PrismaClient } from '@prisma/client'
let prisma = global.prisma || new PrismaClient(
    {
        datasources: {
            db: {
                url: "mysql://9p2qtl5fd4wz5nc5l7gv:pscale_pw_A58uQaN1IRDdAUhO8pwYMmdQaqhvwTQD5vmX9j4nF7i@aws-eu-west-2.connect.psdb.cloud/table-booking?sslmode=require&sslcert=/etc/pki/tls/certs/ca-bundle.crt",
            }
        }
    }
);
if (process.env.NODE_ENV === "development") global.prisma = prisma;
export default prisma