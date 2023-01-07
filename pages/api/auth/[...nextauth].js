import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
const bcrypt = require('bcrypt');
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

function verifyPassword(credentials, user) {
  return bcrypt.compare(credentials.password, user.PasswordHash);
}

const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      async authorize(credentials, req) {
        const user = await prisma.user.findUnique({
          where: {
            Email: credentials.email
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
        token.id = user.id;
        token.name = user.Name;
        token.email = user.Email;
        token.lastName = user.LastName;
      }
      return token;
    },
    session: async ({ session, token }) => {
      if (!session) {
        return;
      }

      const user = await prisma.user.findUnique({
        where: {
          Email: token.email
        }
      });

      session.user.name = user.Name;
      session.user.email = user.Email;
      session.user.lastName = user.LastName;
      session.user.phone = user.PhoneNumber;
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
