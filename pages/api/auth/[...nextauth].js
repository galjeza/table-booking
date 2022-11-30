import NextAuth, from "next-auth";
import CredentialsProvider, from "next-auth/providers/credentials";
import {PrismaClient} from "@prisma/client";
const prisma = new PrismaClient()
const authOptions = {

    providers: [
        CredentialsProvider({
            name: "Credentials",
            async authorize(credentials, req) {
                // Add logic here to look up the user from the credentials supplied
                const user = await prisma.user.findUnique({
                    where: {
                        email: credentials.email
                    }
                });

                if (user && user.password === credentials.password) {
                    return user;
                }
                return null;

            }
        })
    ],
    callbacks: {
        jwt: async ({token, user}) => {
            if(user){
                token.id = user.id;
                token.name = user.name;
                token.email = user.email;
                token.lastName = user.lastName;
                token.phone = user.phone;
            }
            return token;
        },
        session: async ({session, token}) => {
            if (token.id) {
                session.id = token.id;
            }

            return session;

        },
    },
    pages: {
        signIn: "/auth/login/",
    },
    secret: "test",
    jwt: {
        secret: "test",
        encryption: true,
    }
}

export default  NextAuth(authOptions);