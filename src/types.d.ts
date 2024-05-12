declare module "next-auth" {
   
    interface Session {
        user: {
            role: string | undefined
          } & DefaultSession["user"]
    }

    interface User {}

    interface Session {}


  }
   
  import { JWT } from "next-auth/jwt"
   
  declare module "next-auth/jwt" {
    interface JWT {
      idToken?: string,
      role: string | undefined
    }
  }