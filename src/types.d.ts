declare module "next-auth" {
   
    /**
     * Returned by `useSession`, `auth`, contains information about the active session.
     */
    interface Session {
        user: {
            role: string | undefined
          } & DefaultSession["user"]
    }
  }
   
  // The `JWT` interface can be found in the `next-auth/jwt` submodule
  import { JWT } from "next-auth/jwt"
   
  declare module "next-auth/jwt" {
    /** Returned by the `jwt` callback and `auth`, when using JWT sessions */
    interface JWT {
      /** OpenID ID Token */
      idToken?: string,
      role: string | undefined
    }
  }