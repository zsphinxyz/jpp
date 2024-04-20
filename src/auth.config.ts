import type { NextAuthConfig } from "next-auth";
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
      },
      // profile(profile) {
      //   console.log(profile)
      //   return {role: 'user', ...profile}
      // }
    }),
    
  ],
  session: {strategy: 'jwt'},
  trustHost: true,

} satisfies NextAuthConfig