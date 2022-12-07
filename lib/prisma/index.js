
import { PrismaClient } from '@prisma/client'

let index

if (process.env.NODE_ENV === 'production') {
    index = new PrismaClient()
} else {
    if (!global.index) {
        global.index = new PrismaClient()
    }
    index = global.index
}

export default index