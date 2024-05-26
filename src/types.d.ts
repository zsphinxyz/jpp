declare module "next-auth" {
   
    interface Session {
        user: {
            role: string | undefined,
            name: string,
            email: string,
            img: string,
          } & DefaultSession["user"]
    }

    interface User {}



  }
   
  import { JWT } from "next-auth/jwt"
   
  declare module "next-auth/jwt" {
    interface JWT {
      idToken?: string,
      role: string | undefined
    }
  }