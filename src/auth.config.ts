import { FirestoreAdapter } from "@auth/firebase-adapter";
import type { NextAuthConfig } from "next-auth";
// import Google from "next-auth/providers/google";
import { firestore } from "./lib/firestore";
import Google from "@auth/core/providers/google"

export default {
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        }
      }
    }),
  ],
  session: {strategy: 'jwt'},
  // adapter: FirestoreAdapter(firestore),
} satisfies NextAuthConfig