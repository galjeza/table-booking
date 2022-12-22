import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
const bcrypt = require('bcrypt');
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
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
          return { error: 'Invalid email or password' };
        }

        /*
        if (user && user.password === credentials.password) {
          return user;
        }
        */

        bcrypt.compare(
          credentials.password,
          user.PasswordHash,
          (err, matched) => {
            if (err) return { error: 'Error' };
            if (!matched)
              return { error: 'Invalid email or password' };

            if (matched) {
              return user;
            }
          }
        );
      }
    })
  ],
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
        token.lastName = user.lastName;
        token.phone = user.phone;
      }
      return token;
    },
    session: async ({ session, token }) => {
      if (token.id) {
        session.id = token.id;
      }
      return session;
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
