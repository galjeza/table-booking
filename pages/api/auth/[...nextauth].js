import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
const bcrypt = require('bcrypt');
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

function verifyPassword(credentials, user) {
  return bcrypt.compare(credentials.password, user.passwordHash);
}

const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      async authorize(credentials, req) {
        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email
          }
        });

        if (!user) {
          return null;
        }

        const isValid = await verifyPassword(credentials, user);
        if (!isValid) {
          return null;
        }

        return user;
      }
    })
  ],
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        // get the restaurantId that is associated with the user

        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
        token.lastName = user.lastName;
      }
      return token;
    },
    session: async ({ session, token }) => {
      if (!session) {
        return;
      }

      const user = await prisma.user.findUnique({
        where: {
          email: token.email
        }
      });

      const restaurant = await prisma.restaurant.findUnique({
        where: {
          userId: user.id
        }
      });

      session.user.restaurantId = restaurant.id;
      session.user.name = user.name;
      session.user.email = user.email;
      session.user.lastName = user.lastName;
      session.user.phone = user.phoneNumber;
      session.user.id = user.id;

      return Promise.resolve(session);
    }
  },
  pages: {
    signIn: '/auth/login/'
  },
  secret: process.env.NEXTAUTH_SECRET,
  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
    encryption: true
  }
};

export default NextAuth(authOptions);
