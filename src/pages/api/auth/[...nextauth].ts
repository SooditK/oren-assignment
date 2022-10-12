import NextAuth, { User, type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
// Prisma adapter for NextAuth, optional and can be removed
import { prisma } from "../../../server/db/client";
import { env } from "../../../env/server.mjs";

export const authOptions: NextAuthOptions = {
  // Include user.id on session
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      async authorize(credentials, req) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };
        let user: User | null = null;
        try {
          const newuser = await prisma.user.findUnique({
            where: {
              email,
            },
          });
          if (newuser) {
            // match password
            const match = await bcrypt.compare(password, newuser.password!);
            if (match) {
              user = newuser;
            } else {
              throw new Error("Incorrect email or password");
            }
          } else {
            // user not found
            throw new Error("Incorrect email or password");
          }
        } catch (error) {
          throw new Error(JSON.stringify(error + " Something went wrong"));
        }
        return { user };
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  secret: env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
  },
};

export default NextAuth(authOptions);
