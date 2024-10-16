import NextAuth from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";

const handle = NextAuth(authOptions);
export { handle as GET, handle as POST };
