import NextAuth, from "next-auth";
import CredentialsProvider, from "next-auth/providers/credentials";
import {PrismaClient} from "@prisma/client";
const prisma = new PrismaClient()
const authOptions = {

    providers: [
        CredentialsProvider({
            // The name to display on the sign in form (e.g. "Sign in with...")
            name: "Credentials",
            // `credentials` is used to generate a form on the sign in page.
            // You can specify which fields should be submitted, by adding keys to the `credentials` object.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {
                email: {label: "Email", type: "text", placeholder: "email"},
                password: {label: "Geslo", type: "password"},
            },
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